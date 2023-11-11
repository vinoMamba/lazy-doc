import type { FC } from 'react'
import { SideNav } from './components/SideNav'
import { ApiList } from './components/ApiList'
import { Layout, LayoutSideMain, LayoutSideNav } from '@/components/Layout'

export const Home: FC = () => {
  return (
    <Layout>
      <LayoutSideNav>
        <SideNav />
      </LayoutSideNav>
      <LayoutSideMain>
        <ApiList />
      </LayoutSideMain>
    </Layout>
  )
}
