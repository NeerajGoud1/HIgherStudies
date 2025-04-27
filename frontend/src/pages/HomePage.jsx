import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('student'); // Set default to 'student'
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = () => {
    // Dummy login credentials for testing
    const dummyStudentCredentials = { username: 's123', password: 'p123' };
    const dummyFacultyCredentials = { username: 'admin', password: 'f123' };

    // Check if the credentials are correct based on the login type
    if (loginType === 'student') {
      if (username === dummyStudentCredentials.username && password === dummyStudentCredentials.password) {
        setLoginMessage('Student login successful!');
        // Redirect to Student page after successful login
        navigate('/student');
      } else {
        setLoginMessage('Invalid student credentials.');
      }
    } else if (loginType === 'faculty') {
      if (username === dummyFacultyCredentials.username && password === dummyFacultyCredentials.password) {
        setLoginMessage('Faculty login successful!');
        // Redirect to Faculty page after successful login
        navigate('/faculty');
      } else {
        setLoginMessage('Invalid faculty credentials.');
      }
    }
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(-45deg, #B82132, #D2665A, #F2B28C, #F6DED8)',
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
  };

  const contentWrapperStyle = {
    flex: 1,
    display: 'flex',
    width: '100%',
  };

  const sidebarStyle = {
    width: '220px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  };

  const sidebarButtonStyle = {
    backgroundColor: '#F6DED8',
    color: '#B82132', // Dark color for text to contrast with light background
    border: 'none',
    padding: '12px 20px',
    margin: '10px 0',
    borderRadius: '12px',
    width: '80%',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center', // Align icon and text in one line
    justifyContent: 'center',
  };

  const sidebarIconStyle = {
    marginRight: '10px', // Space between icon and text
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6DED8', // Set background color behind the login card
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        {/* Top Navbar */}
        <div style={{ backgroundColor: '#B82132', padding: '10px', color: 'white', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', letterSpacing: '1px' }}>
          VNR VJIET
        </div>

        {/* Sidebar + Main Content */}
        <div style={contentWrapperStyle}>
          {/* Sidebar */}
          <div style={sidebarStyle}>
            <button
              style={sidebarButtonStyle}
              onClick={() => setLoginType('faculty')} // Set login type to 'faculty'
            >
              <i className="fas fa-chalkboard-teacher" style={sidebarIconStyle}></i> {/* Icon for Faculty */}
              Faculty Login
            </button>
            <button
              style={sidebarButtonStyle}
              onClick={() => setLoginType('student')} // Set login type to 'student'
            >
              <i className="fas fa-user-graduate" style={sidebarIconStyle}></i> {/* Icon for Student */}
              Student Login
            </button>
          </div>

          {/* Center Login Card */}
          <div style={mainContentStyle}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', textAlign: 'center', width: '320px' }}>
              <h2 style={{ color: '#B82132', marginBottom: '20px' }}>
                {loginType === 'faculty' ? 'Faculty Login' : loginType === 'student' ? 'Student Login' : 'Login'}
              </h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ margin: '10px 0', padding: '12px', width: '100%', backgroundColor: '#F6DED8', border: 'none', borderRadius: '8px', fontSize: '16px' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '10px 0', padding: '12px', width: '100%', backgroundColor: '#F6DED8', border: 'none', borderRadius: '8px', fontSize: '16px' }}
              />
              <button
                onClick={handleSubmit}
                style={{ marginTop: '15px', padding: '12px 20px', backgroundColor: '#B82132', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '8px', fontSize: '16px', width: '100%' }}
              >
                Submit
              </button>
              {loginMessage && (
                <div style={{ marginTop: '20px', color: loginMessage.includes('successful') ? 'green' : 'red', fontWeight: 'bold' }}>
                  {loginMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
