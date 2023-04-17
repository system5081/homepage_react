import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <a href='https://homepage.system5081.com'><h3>Mypage</h3></a>
        </div>
        <nav>
            <ul>

                <li>
                    <a href='https://blog.system5081.com'>TechBlog</a>     
                </li>
                <li>
                    <a href='#'>FishBlog</a>
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
