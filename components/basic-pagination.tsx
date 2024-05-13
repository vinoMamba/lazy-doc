"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination"

type Props = {
  totalPage: number
  page: number
  total: number
}

export const BasicPagination = ({ totalPage, page ,total}: Props) => {

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('pageNum')) || 1

  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('pageNum', pageNum.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious disabled={page === 1} href={createPageUrl(currentPage - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext disabled={totalPage === page} href={createPageUrl(currentPage + 1)} />
        </PaginationItem>
        <PaginationItem className=" flex items-center text-sm text-muted-foreground">
          Total {total} items
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
