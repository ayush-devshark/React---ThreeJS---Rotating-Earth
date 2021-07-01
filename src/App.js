import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth';

function App() {
    return (
        <div className='App'>
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default App;
