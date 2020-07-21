import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import NavBar from "../navbar.component/NavBar";
import { Container, Rows, Columns, NodeContainer } from "./Grid.styles";
import { aStarAlgorithm } from "../../algorithms/a.star.algorithm";
import { dijkstraAlgorithm } from "../../algorithms/dijkstra.algorithm";

const Grid = () => {
  const [grid, setGrid] = useState([]);
  // hook to restart the DOM only
  const [restartDOM, setRestartDOM] = useState(false);
  const [restartBtn, setRestartBtn] = useState(false);
  // create random obstacle across the grid
  const [randomObstacles, setRandomObstacles] = useState(false);
  // restart var that gets passed to navbar, to display btn or no
  //const [restart, setRestart] = useState(false);
  const [generatingObstacles, setGeneratingObstacles] = useState(false);
  const [movingStartNode, setMovingStartNode] = useState(false);
  const [movingEndNode, setMovingEndNode] = useState(false);
  const [columns, setColumns] = useState(30);
  const [rows, setRows] = useState(15);
  const [startI, setStartI] = useState(0);
  const [startJ, setStartJ] = useState(0);
  const [endI, setEndI] = useState(columns - 1);
  const [endJ, setEndJ] = useState(rows - 1);

  useEffect(() => {
    // grid to store the i & j values of the loops
    let nodes = [];
    const obstacles = () => {
      if (randomObstacles) {
        if (Math.random(1) < 0.3) return true;
      }
      return false;
    };

    // columns
    for (let i = 0; i < columns; i++) {
      let column = [];
      nodes[i] = column;
      // rows
      for (let j = 0; j < rows; j++) {
        if (i === startI && j === startJ) {
          // store obj on every node for A* Algorithm values
          nodes[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            neighbors: null,
            parent: null,
            visited: false,
            path: false,
            obstacle: false,
            startNode: true,
            endNode: false,
            distance: 0,
          });
        } else if (i === endI && j === endJ) {
          // store obj on every node for A* Algorithm values
          nodes[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            neighbors: null,
            parent: null,
            visited: false,
            path: false,
            obstacle: false,
            endNode: true,
            startNode: false,
            distance: Infinity,
          });
        } else {
          // store obj on every node for A* Algorithm values
          nodes[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            neighbors: null,
            parent: null,
            visited: false,
            path: false,
            obstacle: obstacles(),
            startNode: false,
            endNode: false,
            hovering: false,
            distance: Infinity,
          });
        }
      }
    }
    // set grid to grid state to render again
    setGrid(nodes);
  }, [randomObstacles, restartDOM]);

  // GRID ANIMATIONS
  // run the animation with the closedSet arr from the algorithm function
  const searchingAnimation = (visitedNodes, path) => {
    // animation runs after algorithm is done
    for (let i = 0; i < visitedNodes.length; i++) {
      // timeout to delay the loop for the animation
      setTimeout(() => {
        let visitedNode = grid[visitedNodes[i].i][visitedNodes[i].j];
        let gridCopy = grid.slice();
        visitedNode = {
          ...visitedNode,
          visited: true,
        };
        gridCopy[visitedNodes[i].i][visitedNodes[i].j] = visitedNode;
        // this will make the component render again, to display the nodes changing
        setGrid(gridCopy);
        // once the loop reaches it's final element, run rhe path animation
        if (i === visitedNodes.length - 1) pathAnimation(path);
      }, 140 * i);
    }
  };

  // draw the final path, once the searching animation is done
  const pathAnimation = (path) => {
    for (let j = 0; j < path.length; j++) {
      setTimeout(() => {
        let nodePath = grid[path[j].i][path[j].j];
        let gridCopy = grid.slice();
        nodePath = {
          ...nodePath,
          // updating the path nodes (yellow nodes)
          path: true,
        };
        gridCopy[path[j].i][path[j].j] = nodePath;
        setGrid(gridCopy);
        if (j === path.length - 1) setRestartBtn(true);
      }, 140 * j);
    }
  };

  // hover animation, when moving start or end node
  const hoverAnimation = (i, j) => {
    let node = grid[i][j];
    let copyGrid = grid.slice();
    node = {
      ...node,
      hovering: true,
    };
    copyGrid[i][j] = node;
    setGrid(copyGrid);
  };

  // function that created individual function
  const createObstacle = (i, j) => {
    let obstacleNode = grid[i][j];
    let gridCopy = grid.slice();
    obstacleNode = {
      ...obstacleNode,
      obstacle: true,
    };
    gridCopy[i][j] = obstacleNode;
    setGrid(gridCopy);
  };

  const createRandomObstacles = () => {
    setRandomObstacles((p) => !p);
  };

  const createNeighbors = () => {
    const nodeNeighbors = (i, j) => {
      let neighbors = [];
      // adding the neighboors to each individual node
      // and those get stored in the object node
      // managing edges with if statements
      if (i < columns - 1) neighbors.push(grid[i + 1][j]);
      if (j < rows - 1) neighbors.push(grid[i][j + 1]);
      if (i > 0) neighbors.push(grid[i - 1][j]);
      if (j > 0) neighbors.push(grid[i][j - 1]);
      if (i < columns - 1 && j < rows - 1) neighbors.push(grid[i + 1][j + 1]);
      if (i > 0 && j < rows - 1) neighbors.push(grid[i - 1][j + 1]);
      if (i > 0 && j > 0) neighbors.push(grid[i - 1][j - 1]);
      if (i < columns - 1 && j > 0) neighbors.push(grid[i + 1][j - 1]);

      return neighbors;
    };
    // adding the neighbors to the node, once the grid is already built
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // adding neighbors to individual node
        grid[i][j].neighbors = nodeNeighbors(i, j);
      }
    }
  };

  const moveNode = (i, j, action) => {
    let node = grid[i][j];
    let gridCopy = grid.slice();
    if (action === 1) {
      // move start
      node = {
        ...node,
        startNode: true,
        distance: 0,
      };
    } else if (action === 2) {
      // move end
      node = {
        ...node,
        endNode: true,
      };
    } else if (action === 3) {
      // delete start node
      node = {
        ...node,
        startNode: false,
        distance: Infinity,
      };
    } else if (action === 4) {
      // delete end node
      node = {
        ...node,
        endNode: false,
      };
    }
    gridCopy[i][j] = node;
    setGrid(gridCopy);
  };

  const handleMouseDown = (i, j) => {
    if (grid[i][j].startNode) {
      moveNode(i, j, 3);
      setMovingStartNode(true);
    } else if (grid[i][j].endNode) {
      moveNode(i, j, 4);
      setMovingEndNode(true);
    } else {
      setGeneratingObstacles(true);
    }
  };

  const handleMouseMove = (i, j) => {
    if (movingStartNode || movingEndNode) hoverAnimation(i, j);
    if (generatingObstacles) createObstacle(i, j);
  };

  const handleMouseUp = (i, j) => {
    if (movingStartNode) {
      moveNode(i, j, 1);
      setMovingStartNode(false);
      setStartI(i);
      setStartJ(j);
    } else if (movingEndNode) {
      moveNode(i, j, 2);
      setMovingEndNode(false);
      setEndI(i);
      setEndJ(j);
    } else {
      setGeneratingObstacles(false);
    }
  };

  const executeAStar = () => {
    // creating the neighbors of each node
    createNeighbors();
    // in case they turned into obstacles from the initial loop
    grid[startI][startJ].obstacle = false;
    grid[endI][endJ].obstacle = false;
    // algorithm only needs start and end, because
    // each object has stored their neighbors
    // sending start & end node to algorithm function
    const result = aStarAlgorithm(grid[startI][startJ], grid[endI][endJ]);
    if (result === "no viable solution") return;
    searchingAnimation(result[0], result[1]);
  };

  const executeDijkstra = () => {
    createNeighbors();
    const result = dijkstraAlgorithm(
      grid,
      grid[startI][startJ],
      grid[endI][endJ]
    );
    searchingAnimation(result[0], result[1]);
  };

  const restartingDOM = () => {
    setRestartDOM((p) => !p);
    setRestartBtn(false);
    setRandomObstacles(false);
    setGeneratingObstacles(false);
    setStartI(0);
    setStartJ(0);
    setEndI(columns - 1);
    setEndJ(rows - 1);
  };

  return (
    <>
      <Container>
        <NavBar
          executeAStar={() => executeAStar()}
          executeDijkstra={() => executeDijkstra()}
          randomObstacles={() => createRandomObstacles()}
          restartingDOM={() => restartingDOM()}
          restartBtn={restartBtn}
        />
        <Columns>
          {grid.map((c, cIndx) => {
            return (
              <Rows key={cIndx}>
                {c.map((r, rIndx) => (
                  <NodeContainer
                    key={rIndx}
                    onClick={() => createObstacle(cIndx, rIndx)}
                    onMouseDown={() => handleMouseDown(cIndx, rIndx)}
                    onMouseMove={() => handleMouseMove(cIndx, rIndx)}
                    onMouseUp={() => handleMouseUp(cIndx, rIndx)}
                  >
                    <Node
                      key={rIndx}
                      obstacle={r.obstacle}
                      visited={grid[cIndx][rIndx].visited}
                      path={grid[cIndx][rIndx].path}
                      start={grid[cIndx][rIndx].startNode}
                      end={grid[cIndx][rIndx].endNode}
                      hovering={grid[cIndx][rIndx].hovering}
                    />
                  </NodeContainer>
                ))}
              </Rows>
            );
          })}
        </Columns>
      </Container>
    </>
  );
};
export default Grid;
