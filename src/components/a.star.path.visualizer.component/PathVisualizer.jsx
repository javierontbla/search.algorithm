import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import NavBar from "../navbar.component/NavBar";
import { VisualizerContainer, Rows, Column } from "./PathVisualizer.styles";
import { aStarAlgorithm } from "../../algorithms/a.star.algorithm";
import { screenDimensions } from "../../hooks/screen.size.hook";

const PathVisualizer = () => {
  // complete grid
  const [table, setTable] = useState([]);
  // create random obstacle across the grid
  const [createRandom, setCreateRandom] = useState(false);
  // restart var that gets passed to navbar, to display btn or no
  const [restart, setRestart] = useState(false);
  const [creatingObstacles, setCreatingObstacles] = useState(false);
  const [movingStartNode, setMovingStartNode] = useState(false);
  const [movingEndNode, setMovingEndNode] = useState(false);
  // hook to restart the DOM only
  const [restartDOM, setRestartDOM] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(37);
  const [endY, setEndY] = useState(15);

  // grid size X & Y
  let columns = 38;
  let rows = 16;

  useEffect(() => {
    // grid to store the i & j values of the loops
    let grid = [];

    const randomObstacles = () => {
      if (createRandom) {
        if (Math.random(1) < 0.3) return true;
      }
      return false;
    };
    // columns
    for (let i = 0; i < columns; i++) {
      let column = [];
      grid[i] = column;
      // rows
      for (let j = 0; j < rows; j++) {
        if (i === startX && j === startY) {
          // store obj on every node for A* Algorithm values
          grid[i].push({
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
          });
        } else if (i === endX && j === endY) {
          // store obj on every node for A* Algorithm values
          grid[i].push({
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
          });
        } else {
          // store obj on every node for A* Algorithm values
          grid[i].push({
            f: 0,
            g: 0,
            h: 0,
            j,
            i,
            neighbors: null,
            parent: null,
            visited: false,
            path: false,
            obstacle: randomObstacles(),
            startNode: false,
            endNode: false,
            hovering: false,
          });
        }
      }
    }
    // set grid to table state to render again
    setTable(grid);
    setRestart(false);
    //console.log(screenDimensions());
  }, [createRandom, restartDOM]);

  // run the animation with the closedSet arr from the algorithm function
  const aStarAnimation = (visitedNodes, path) => {
    // animation runs after algorithm is done
    for (let i = 0; i < visitedNodes.length; i++) {
      // timeout to delay the loop for the animation
      setTimeout(() => {
        const oldNode = table[visitedNodes[i].i][visitedNodes[i].j];
        const newGrid = table.slice();
        const newNode = {
          ...oldNode,
          visited: true,
        };
        newGrid[visitedNodes[i].i][visitedNodes[i].j] = newNode;
        // this will make the component render again, to display the nodes changing
        setTable(newGrid);
        // once the loop reaches it's final element, run rhe path animation
        if (i === visitedNodes.length - 1) drawPath(path);
      }, 110 * i);
    }
  };

  // draw the final path, once the searching animation is done
  const drawPath = (path) => {
    for (let j = 0; j < path.length; j++) {
      setTimeout(() => {
        const oldNode = table[path[j].i][path[j].j];
        const newGrid = table.slice();
        const newNode = {
          ...oldNode,
          // updating the path nodes (blue nodes)
          path: true,
        };
        newGrid[path[j].i][path[j].j] = newNode;
        setTable(newGrid);
        if (j === path.length - 1) setRestart(true);
      }, 110 * j);
    }
  };

  const createObstacle = (i, j) => {
    const oldNode = table[i][j];
    const copyGrid = table.slice();
    const newNode = {
      ...oldNode,
      obstacle: true,
    };
    copyGrid[i][j] = newNode;
    setTable(copyGrid);
  };

  const addNeighbors = () => {
    const nodeNeighbors = (i, j) => {
      let neighborsArr = [];
      // adding the neighboors to each individual node
      // and those get stored in the object node
      // managing edges with if statements
      if (i < columns - 1) neighborsArr.push(table[i + 1][j]);
      if (i > 0) neighborsArr.push(table[i - 1][j]);
      if (j < rows - 1) neighborsArr.push(table[i][j + 1]);
      if (j > 0) neighborsArr.push(table[i][j - 1]);
      if (i > 0 && j > 0) neighborsArr.push(table[i - 1][j - 1]);
      if (i < columns - 1 && j < rows - 1)
        neighborsArr.push(table[i + 1][j + 1]);
      if (i > 0 && j < rows - 1) neighborsArr.push(table[i - 1][j + 1]);
      if (i < columns - 1 && j > 0) neighborsArr.push(table[i + 1][j - 1]);

      return neighborsArr;
    };

    // adding the neighbors to the node, once the grid is already built
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // adding neighbors
        table[i][j].neighbors = nodeNeighbors(i, j);
      }
    }
  };

  const executeAlgorithm = () => {
    addNeighbors();
    // sending start & end node to algorithm function
    // in case they turned into obstacles from the initial loop
    table[startX][startY].obstacle = false;
    table[endX][endY].obstacle = false;
    // algorithm only needs start and end, because
    // each object has stored their neighbors
    const algorithmResult = aStarAlgorithm(
      table[startX][startY],
      table[endX][endY]
    );
    if (algorithmResult === "no viable solution") return;
    aStarAnimation(algorithmResult[0], algorithmResult[1]);
  };

  const restartVisualizer = () => {
    setRestartDOM((prevState) => !prevState);
    setCreateRandom(false);
    setCreatingObstacles(false);
  };

  const nodeAnimation = (i, j) => {
    let node = table[i][j];
    let copyGrid = table.slice();
    node = {
      ...node,
      hovering: true,
    };
    copyGrid[i][j] = node;
    setTable(copyGrid);
  };

  const handleMouseDown = (i, j) => {
    if (table[i][j].startNode) {
      deleteStartNode(i, j);
      setMovingStartNode(true);
    } else if (table[i][j].endNode) {
      deleteEndNode(i, j);
      setMovingEndNode(true);
    } else {
      setCreatingObstacles(true);
    }
  };

  const handleMouseMove = (i, j) => {
    if (movingStartNode || movingEndNode) nodeAnimation(i, j);
    if (creatingObstacles) createObstacle(i, j);
  };

  const handleMouseUp = (i, j) => {
    if (movingStartNode) {
      moveStartNode(i, j);
      setMovingStartNode(false);
      setStartX(i);
      setStartY(j);
    } else if (movingEndNode) {
      moveEndNode(i, j);
      setMovingEndNode(false);
      setEndX(i);
      setEndY(j);
    } else {
      setCreatingObstacles(false);
    }
  };

  return (
    <>
      <VisualizerContainer>
        <NavBar
          runAStar={() => executeAlgorithm()}
          random={() => setCreateRandom((prevState) => !prevState)}
          restart={restart}
          restartVisualizer={() => restartVisualizer()}
        />
        <Rows>
          {table.map((column, colIndx) => {
            return (
              <Column key={colIndx}>
                {column.map((row, rowIndx) => (
                  <div
                    key={rowIndx}
                    onClick={() => createObstacle(colIndx, rowIndx)}
                    onMouseDown={() => handleMouseDown(colIndx, rowIndx)}
                    onMouseMove={() => handleMouseMove(colIndx, rowIndx)}
                    onMouseUp={() => handleMouseUp(colIndx, rowIndx)}
                  >
                    <Node
                      obstacle={row.obstacle}
                      key={rowIndx}
                      visited={table[colIndx][rowIndx].visited}
                      path={table[colIndx][rowIndx].path}
                      start={table[colIndx][rowIndx].startNode}
                      end={table[colIndx][rowIndx].endNode}
                      hovering={table[colIndx][rowIndx].hovering}
                    />
                  </div>
                ))}
              </Column>
            );
          })}
        </Rows>
      </VisualizerContainer>
    </>
  );
};

export default PathVisualizer;
