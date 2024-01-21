import Customize from "./components/customize";
import Layout from "./components/layout";
import Preview from "./components/preview";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

function App() {
  return (
    <Layout>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40} minSize={40}>
          <Customize />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <Preview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
}

export default App;
