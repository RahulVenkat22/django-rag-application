import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/chat-with-document', label: 'Chat With Document' },
  { to: '/group-chat', label: 'Group Chat with Team' },
  { to: '/documents', label: 'Document List' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Chat App</h2>
      <nav>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
