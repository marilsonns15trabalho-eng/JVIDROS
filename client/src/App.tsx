/* Oficina Editorial: layout público de página única, com navegação por âncoras e tema claro de base areia. */
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ChatBot from "./components/ChatBot/ChatBot";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
      <ChatBot />
    </ErrorBoundary>
  );
}