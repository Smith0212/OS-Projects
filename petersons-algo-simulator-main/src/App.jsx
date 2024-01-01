/**
 * This module contains a ReactJS application that simulates the Peterson's Algorithm.
  The app consists of three processes and a shared resource. The processes can enter a critical section and modify the shared resource,
  and the Peterson's algorithm is used to ensure that only one process at a time can be in the critical section.
Functions:
    handleStart: Starts the simulation
    handlePause: Pauses the simulation
    handleResume: Resumes the simulation
    handleReset: Resets the simulation
    handleEnterCritical1: Called when Process 1 enters the critical section
    handleExitCritical1: Called when Process 1 exits the critical section
    handleEnterCritical2: Called when Process 2 enters the critical section
    handleExitCritical2: Called when Process 2 exits the critical section
Components:
    Process: Displays a process and its state
    SharedResource: Displays the shared resource and allows modifying it
    ControlPanel: Displays buttons to control the simulation
The app uses Material-UI for styling and layout, and also imports some fonts.
 */

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// MUI
import { CssBaseline ,Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// File Structure
import assets from './Assets/assets'
import React, { useState,useEffect } from "react";
import Process from "./components/Process";
import SharedResource from "./components/SharedResource";
import ControlPanel from "./components/ControlPanel";
import "./App.css";

const App = () => {
	const theme = createTheme({
		palette: { 
			mode: 'dark'
		},
		components: {
			MuiPaper: {
			  styleOverrides: {
				root: {
				  color:'#fff'
				},
			  },
			},
		  },
	});
	const [resource, setResource] = useState("");

  const handleStart = () => {
    setIsRunning(true);
    console.log('start')
  };

  const handlePause = () => {
    setIsPaused(true);
    console.log('pause')
  };

  const handleResume = () => {
    setIsPaused(false);
    console.log('resume')
  };

  const handleReset = () => {
    setResource("");
    setProcess1Running(false);
    setProcess2Running(false);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleEnterCritical1 = () => {
    setProcess1Running(false);
    setProcess2Running(true);
  };

  const handleExitCritical1 = () => {
    setProcess2Running(false);
    setProcess1Running(false);
    setTimeout(() => {
      setProcess2Running(false);
      setProcess1Running(true);
    }, 500);
  };

  const handleEnterCritical2 = () => {
    setProcess2Running(false);
    setProcess1Running(true);
  };

  const handleExitCritical2 = () => {
    setProcess1Running(false);
    setProcess2Running(false);
    setTimeout(() => {
      setProcess1Running(false);
      setProcess2Running(true);
    }, 500);
  };
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [process1Running, setProcess1Running] = useState(false);
  const [process2Running, setProcess2Running] = useState(false);
  const [sharedResourceText, setSharedResourceText] = useState('');
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning && !isPaused) {
      intervalId = setInterval(() => {
        if (turn === 0) {
          setProcess1Running(true);
          setProcess2Running(false);
          setTimeout(() => {
            setTurn(1);
          }, 2500);
        } else {
          setProcess1Running(false);
          setProcess2Running(true);
          setTimeout(() => {
            setTurn(0);
          }, 7000);
        }
      }, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, isPaused, turn]);

	return (
		<ThemeProvider theme={createTheme(assets.theme)}>
			<CssBaseline />

			{/* Background Video */}
        <Box
          sx={{
            position: 'fixed',
            width: '100%',
            height:'100%',
            zIndex: '-20',
            overflow: 'scroll',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          <video loop autoPlay muted>
            <source src='video.mp4' type='video/mp4' />
          </video>
        </Box>

      <h1>PETERSON'S ALGORITHM SIMULATOR</h1>
      <div className='app-body'>
        <div className="processes">
          <Process
            name="PROCESS 1"
            isRunning={isRunning}
            isPaused={isPaused}
            isCritical={process1Running}
            onEnterCritical={handleEnterCritical1}
            onExitCritical={handleExitCritical1}
          />
          <SharedResource value={resource} onChange={setResource} />
          <Process
            name="PROCESS 2"
            isRunning={isRunning}
            isPaused={isPaused}
            isCritical={process2Running}
            onEnterCritical={handleEnterCritical2}
            onExitCritical={handleExitCritical2}
          />
        </div>
      <ControlPanel
        isRunning={isRunning}
        isPaused={isPaused}
        onStart={handleStart}
        onPause={handlePause}
        onResume={handleResume}
        onReset={() => {
          setIsRunning(false);
          setIsPaused(false);
          setProcess1Running(false);
          setProcess2Running(false);
          setSharedResourceText('');
        }}	  />
  </div>

	</ThemeProvider>
	);
};

export default App;
