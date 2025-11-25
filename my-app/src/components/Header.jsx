import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-transparent transition-all duration-300">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                <Bot className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white tracking-tight">AgenticAI</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 font-medium"
                    onClick={() => navigate('/login')}
                >
                    Log in
                </Button>
                <Button
                    className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-blue-900/20"
                    onClick={() => navigate('/chat')}
                >
                    Get Started
                </Button>
            </div>
        </header>
    );
};

export default Header;
