import React from 'react';

export default function Header({ children}){    //pegar propriedadeespecifica {children}  no avaScript
    return (
        <header>
        <h1>{children}</h1>
        </header>
    );
}
