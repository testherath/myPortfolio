// src/components/Loader.jsx
import { Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html center>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        border: '4px solid rgba(125, 211, 252, 0.3)',
        borderTop: '4px solid #7dd3fc',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  )
}