import { useDispatch } from 'react-redux'
import { type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Button, DivMain, DivMiddle, Span } from './styled'

export function Pagination ({
  offset,
  limit,
  count,
  setOffset
}: {
  offset: number
  limit: number
  count: number
  setOffset: ActionCreatorWithPayload<number, string>
}) {
  const page = offset !== 0 ? Math.floor(offset / limit) + 1 : 1
  const maxPage = limit !== 0 ? Math.floor(count / limit) + 1 : 1
  const dispatch = useDispatch()
  const firstPageEnabled = page > 1
  const prevPageEnabled = page > 1
  const nextPageEnabled = page < maxPage
  const lastPageEnabled = page < maxPage
  const leftPagesLeft = page - 2
  const rightPagesLeft = maxPage - 1 - page
  const setPage = (page: number) => setOffset((page - 1) * limit)

  return <DivMain>
      {maxPage > 1
        ? <Button fixedFlex={true} disabled={!prevPageEnabled} onClick={() => dispatch(setPage(page - 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem" height="1rem">
              <path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </Button>
        : null}
      <DivMiddle>
        {page > 1
          ? <Button disabled={!firstPageEnabled} onClick={() => dispatch(setPage(1))}>
            <Span>1</Span>
          </Button>
          : null}
        {leftPagesLeft === 1
          ? <Button onClick={() => dispatch(setPage(2))}>
              <Span>2</Span>
            </Button>
          : null}
        {leftPagesLeft > 1
          ? <Button onClick={() => dispatch(setPage(Math.round(page / 2)))}>
              <Span>...</Span>
            </Button>
          : null}
        <Button disabled={true}>
          <Span>{page}</Span>
        </Button>
        {rightPagesLeft > 1
          ? <Button onClick={() => dispatch(setPage(Math.round(page + (maxPage - page) / 2)))}>
              <Span>...</Span>
            </Button>
          : null}
        {rightPagesLeft === 1
          ? <Button onClick={() => dispatch(setPage(maxPage - 1))}>
          <Span>{maxPage - 1}</Span>
        </Button>
          : null}
        {page < maxPage
          ? <Button disabled={!lastPageEnabled} onClick={() => dispatch(setPage(maxPage))}>
              <Span>{maxPage}</Span>
            </Button>
          : null}
      </DivMiddle>
      {maxPage > 1
        ? <Button fixedFlex={true} disabled={!nextPageEnabled} onClick={() => dispatch(setPage(page + 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem" height="1rem">
              <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
            </svg>
          </Button>
        : null}
    </DivMain>
}
