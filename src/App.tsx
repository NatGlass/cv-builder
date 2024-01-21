import Customize from "./components/customize";
import Layout from "./components/layout";
import Preview from "./components/preview";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { FormDataProvider } from "./contexts/FormContext";

function App() {
  return (
    <FormDataProvider>
      <Layout>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40}>
            <Customize />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <Preview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Layout>
    </FormDataProvider>
  );
}

export default App;
