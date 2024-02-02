import Link from "next/link";
import { useState } from "react";

    const Login = ({ onClose }:any) => {
        const [email, setEmail] = useState('micorreo@micorreo.com');
        const [password, setPassword] = useState('');

        const handleLogin = () => {
            console.log(`Login con correo: ${email} y contraseña: ${password}`);
        }

    return (
        <div>
            <div>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Correo:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        e.preventDefault(); // Invoca la función preventDefault
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        e.preventDefault(); // Invoca la función preventDefault
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <p>¿No tienes cuenta? <Link href="#">Regístrate</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Login;
