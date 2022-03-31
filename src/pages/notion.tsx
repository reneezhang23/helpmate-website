import { GetServerSideProps } from 'next'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { notion } from '../lib'

type Props = {
  recordMap: ExtendedRecordMap
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      recordMap: await notion.getPage('75744c14294642c6a57ef16623728562'),
    },
  }
}

export default function Notion({ recordMap }: Props) {
  return <NotionRenderer recordMap={recordMap} />
}
