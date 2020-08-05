import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import NavBar from "../navbar.component/NavBar";
import { Container, Rows, Columns, NodeContainer } from "./Grid.styles";
import { aStarAlgorithm } from "../../pathfinding.algorithms/a.star.algorithm";
import { dijkstraAlgorithm } from "../../pathfinding.algorithms/dijkstra.algorithm";
import { bfsAlgorithm } from "../../pathfinding.algorithms/bfs.algorithm";
import { recursiveDivision } from "../../mazes.algorithms/recursive.division.algorithm";

const Grid = () => {
  const [grid, setGrid] = useState([]);
  // hook to restart the DOM only
  const [restartDOM, setRestartDOM] = useState(false);
  // restart var that gets passed to navbar, to display btn or no
  const [restartBtn, setRestartBtn] = useState(false);
  // create random obstacle across the grid
  const [randomObstacles, setRandomObstacles] = useState(false);
  const [generatingObstacles, setGeneratingObstacles] = useState(false);
  const [movingStartNode, setMovingStartNode] = useState(false);
  const [movingEndNode, setMovingEndNode] = useState(false);
  const [columns, setColumns] = useState(41);
  const [rows, setRows] = useState(19);
  const [startI, setStartI] = useState(5);
  const [startJ, setStartJ] = useState(8);
  const [endI, setEndI] = useState(columns - 6);
  const [endJ, setEndJ] = useState(rows - 11);

  useEffect(() => {
    const obstacles = () => {
      if (randomObstacles) {
        if (Math.random(1) < 0.3) return true;
      }
      return false;
    };

    // grid to store the i & j values of the loops
    let nodes = [];
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
            parent: null,
            visited: false,
            visitedBfs: false,
            obstacle: false,
            startNode: true,
            endNode: false,
            distance: 0,
            maze: false,
          });
        } else if (i === endI && j === endJ) {
          // store obj on every node for A* Algorithm values
          nodes[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            parent: null,
            visited: false,
            visitedBfs: false,
            obstacle: false,
            endNode: true,
            startNode: false,
            distance: Infinity,
            maze: false,
          });
        } else {
          // store obj on every node for A* Algorithm values
          nodes[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            parent: null,
            visited: false,
            visitedBfs: false,
            obstacle: obstacles(),
            startNode: false,
            endNode: false,
            distance: Infinity,
            maze: false,
          });
        }
      }
    }
    // set grid to grid state to render again
    setGrid(nodes);
  }, [randomObstacles, restartDOM]);

  // CREATE RANDOM OBSTACLES ON GRID
  const createRandomObstacles = () => {
    setRandomObstacles((p) => !p);
  };

  // GRID ANIMATIONS
  const searchingAnimation = (visitedNodes, path, action) => {
    for (let i = 0; i < visitedNodes.length; i++) {
      if (
        grid[visitedNodes[i].i][visitedNodes[i].j].startNode ||
        grid[visitedNodes[i].i][visitedNodes[i].j].endNode
      )
        continue;
      setTimeout(() => {
        let node = grid[visitedNodes[i].i][visitedNodes[i].j];
        let copy = grid.slice();
        node[action] = true;
        copy[visitedNodes[i].i][visitedNodes[i].j] = node;
        setGrid(copy);

        if (i === visitedNodes.length - 1 && path) pathAnimation(path);
      }, i * 140);
    }
  };

  // draw the final path, once the searching animation is done
  const pathAnimation = (path) => {
    path.reverse();
    for (let j = 0; j < path.length; j++) {
      setTimeout(() => {
        let nodePath = grid[path[j].i][path[j].j];
        let gridCopy = grid.slice();
        nodePath["path"] = true;
        gridCopy[path[j].i][path[j].j] = nodePath;
        setGrid(gridCopy);
        if (j === path.length - 1) setRestartBtn(true);
      }, 140 * j);
    }
  };

  // create an individual obstacle or start || end node hover animation
  // (animation also)
  const obstacleAnimation = (i, j, action) => {
    let node = grid[i][j];
    let copy = grid.slice();
    node[action] = true;
    copy[i][j] = node;
    setGrid(copy);
  };

  const moveIcon = (i, j, action) => {
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
      moveIcon(i, j, 3);
      setMovingStartNode(true);
    } else if (grid[i][j].endNode) {
      moveIcon(i, j, 4);
      setMovingEndNode(true);
    } else {
      setGeneratingObstacles(true);
    }
  };

  const handleMouseMove = (i, j) => {
    if (generatingObstacles) obstacleAnimation(i, j, "obstacle");
  };

  const handleMouseUp = (i, j) => {
    if (movingStartNode) {
      moveIcon(i, j, 1);
      setMovingStartNode(false);
      setStartI(i);
      setStartJ(j);
    } else if (movingEndNode) {
      moveIcon(i, j, 2);
      setMovingEndNode(false);
      setEndI(i);
      setEndJ(j);
    } else {
      setGeneratingObstacles(false);
    }
  };

  const executeAStar = () => {
    // in case they turned into obstacles from the initial loop
    grid[startI][startJ].obstacle = false;
    grid[endI][endJ].obstacle = false;
    // algorithm only needs start and end, because
    // each object has stored their neighbors
    // sending start & end node to algorithm function
    const result = aStarAlgorithm(
      grid[startI][startJ],
      grid[endI][endJ],
      columns,
      rows,
      grid
    );
    if (result === false) return;
    searchingAnimation(result[0], result[1], "visited");
  };

  const executeDijkstra = () => {
    const result = dijkstraAlgorithm(grid[endI][endJ], columns, rows, grid);
    searchingAnimation(result[0], result[1], "visited");
  };

  const executeBfs = () => {
    const result = bfsAlgorithm(
      grid[startI][startJ],
      grid[endI][endJ],
      columns,
      rows,
      grid
    );
    searchingAnimation(result[0], result[1], "visited");
  };

  const executeRecursiveDivision = () => {
    const maze = recursiveDivision(grid, columns, rows);
    searchingAnimation(maze, false, "maze");
  };

  const restartingDOM = () => {
    setRestartDOM((p) => !p);
    setRestartBtn(false);
    setRandomObstacles(false);
    setGeneratingObstacles(false);
    setStartI(5);
    setStartJ(8);
    setEndI(columns - 6);
    setEndJ(rows - 11);
  };

  return (
    <>
      <Container>
        <NavBar
          executeAStar={() => executeAStar()}
          executeDijkstra={() => executeDijkstra()}
          executeBfs={() => executeBfs()}
          executePrims={() => executeRecursiveDivision()}
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
                    onClick={() => obstacleAnimation(cIndx, rIndx, "obstacle")}
                    onMouseDown={() => handleMouseDown(cIndx, rIndx)}
                    onMouseMove={() => handleMouseMove(cIndx, rIndx)}
                    onMouseUp={() => handleMouseUp(cIndx, rIndx)}
                  >
                    <Node
                      key={rIndx}
                      obstacle={r.obstacle}
                      maze={grid[cIndx][rIndx].maze}
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
