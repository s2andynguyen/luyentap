import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="useref">
                                UseRef
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="usecontext">
                                UseContext
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="todo">
                                TodoList
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
