import { ConfigProvider, ThemeConfig } from "antd"
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const theme: ThemeConfig = {
    token: {
      colorPrimary: '#343a40'
    },
    components: {
      Modal: {
        contentBg: '#fafafa',
        headerBg: '#fafafa'
      },
      Tag: {
        defaultBg: '#ededed',
        defaultColor: '#666666'
      }
    }
  }
  return (
    <>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}

export default App
