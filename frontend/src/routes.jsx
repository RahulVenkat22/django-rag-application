import Home from './pages/Home';
import Chat from './pages/Chat';
import ChatWithDocument from './pages/ChatWithDocument';
import GroupChat from './pages/GroupChat';
import DocumentList from './pages/DocumentList';
import NotFound from './pages/NotFound';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/chat', element: <Chat /> },
  { path: '/chat-with-document', element: <ChatWithDocument /> },
  { path: '/group-chat', element: <GroupChat /> },
  { path: '/documents', element: <DocumentList /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
