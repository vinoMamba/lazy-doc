import type { FC } from 'react'
import { Button, Divider } from '@nextui-org/react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideNav } from './compoents/SideNav'
import { Layout, LayoutSideMain, LayoutSideNav } from '@/components/Layout'
import { SvgIcon } from '@/components/Icon'
import { router } from '@/router/router'

export const Project: FC = () => {
  const location = useLocation()
  const handleBack = () => {
    router.navigate(-1)
  }
  return (
    <Layout>
      <LayoutSideNav>
        {
          location.pathname === '/project/list'
            ? <SideNav />
            : (
              <>
                <div className=" flex items-center space-x-2 cursor-default px-2">
                  <Button isIconOnly size="sm" variant="light" onClick={handleBack}>
                    <SvgIcon icon="ic:round-keyboard-backspace" className=" text-xl" />
                  </Button>
                  <h6 className=" font-bold">技术团队文档示例</h6>
                </div>

                <Divider className="my-2" />
                <div className="flex items-center space-x-5  p-2  cursor-pointer h-8">
                  <SvgIcon icon="material-symbols:add" className=" text-xl " />
                  <Divider orientation="vertical" />
                  <SvgIcon icon="material-symbols:create-new-folder-outline" className=" text-xl" />
                  <Divider orientation="vertical" className=" text-xl" />
                  <SvgIcon icon="material-symbols:content-copy-outline" className=" text-xl" />
                  <Divider orientation="vertical" />
                  <SvgIcon icon="ic:sharp-more-horiz" className=" text-xl" />
                </div>
              </>
            )
        }
      </LayoutSideNav>
      <LayoutSideMain>
        <Outlet />
      </LayoutSideMain>
    </Layout>
  )
}
