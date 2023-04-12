import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <a href='http://localhost:3000/'><h3>Mypage</h3></a>
        </div>
        <nav>
            <ul>

                <li>
                    <a href='http://localhost:3000/blog'>Blog</a>     
                </li>
                <li>
                    <a href='https://github.com/system5081'>GitHub</a>     
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
