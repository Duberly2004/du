import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem("username")) {
            navigate('/');
        }
    }, [navigate]);  

    return window.localStorage.getItem("username") ? <>{children}</> : null;
};

export default ProtectedRoute;