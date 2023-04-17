import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry />
      <meshStandardMaterial color='#FF5733' />
    </mesh>
  )
}

export default function MyScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}
