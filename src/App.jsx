import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import profileImage from './assets/profile-pic.svg';

function App() {
  return (
    <section style={{
      display: 'flex',
      maxWidth: '384px',
      padding: 'var(--spacing-500, 40px)',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--spacing-300, 24px)',
      flex: '1 0 0',
      backgroundColor: '#1F1F1F',
      borderRadius: '8px',
    }}>
      <div>
        <img src={profileImage} alt="Profile" />
      </div>
      <div>
        <div
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: 'white'
          }}>Jessica Randall</div>
        <div
          style={{
            fontSize: '14px',
            color: '#C4F82A',
            fontWeight: '700',

          }}>London, United Kingdom</div>
      </div>
      <div style={{
        fontSize: '14px',
        color: 'white',
        fontWeight: '400',

      }}>
        "Front-end developer and avid reader."
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-200, 8px)'
        }}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </section>
  );
}

export default App;