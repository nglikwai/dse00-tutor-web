import {
  faBook,
  faBookBookmark,
  faCertificate,
  faHouse,
  faPhone,
  faPlus,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import * as R from 'ramda'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import styled from 'styled-components'

const Cases: NextPage = () => {
  const { t } = useTranslation()

  const [name, setName] = useState('陳加文')
  const [location, setLocation] = useState('大埔')
  const [subject, setSubject] = useState('生物、化學')
  const [school, setSchool] = useState('香港中文大學')

  // const router = useRouter()

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Wrapper>
            <LeftBarWrapper>
              <Avator />
              <ItemTitle>
                <FontAwesomeIcon icon={faShieldAlt} color='#444' size='lg' />
                <ItemInner>認證資料</ItemInner>
              </ItemTitle>
              <Item>
                <FontAwesomeIcon icon={faPhone} color='#444' size='lg' />
                <ItemInner>
                  <Input height='36px' placeholder='61234567' />
                </ItemInner>
              </Item>
              <Item>
                <FontAwesomeIcon icon={faCertificate} color='#444' size='lg' />
                <ItemInner>
                  <Input height='36px' placeholder='61234567' />
                </ItemInner>
              </Item>
            </LeftBarWrapper>
            <RightBarWrapper>
              <Header>
                <ItemTitle>
                  你好，我是
                  <Input
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setName(e.target.value)
                    }
                  />
                  老師 <ItemText>自 05-05-2022 加入</ItemText>
                </ItemTitle>
                <Link href='/tutor/1'>
                  <MoreButton>確認</MoreButton>
                </Link>
              </Header>

              <Brief>
                <div>
                  <ItemTitle>關於{name.substring(0, 1)}老師</ItemTitle>
                  <Textarea
                    defaultValue='I Søren Sarup (born 1975) lives in Aarhus, Fanø and Agger. I
                    am an independent Danish architect that works professionally
                    with planning and design of all building types, with a
                    passionated focus on vacation-homes, nature hotels and
                    Boutique hotels.'
                  />
                </div>
              </Brief>
              <ItemsWrapper>
                <Item>
                  <FontAwesomeIcon icon={faHouse} color='#555' size='lg' />
                  <ItemInner>
                    住在
                    <Input
                      height='36px'
                      value={location}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setLocation(e.target.value)
                      }
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon icon={faBook} color='#555' size='lg' />
                  <ItemInner>
                    教授
                    <Input
                      height='36px'
                      value={subject}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSubject(e.target.value)
                      }
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    color='#555'
                    size='lg'
                  />
                  <ItemInner>
                    就讀
                    <Input
                      height='36px'
                      value={school}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSchool(e.target.value)
                      }
                    />
                  </ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>課堂筆記</ItemTitle>
                <Notes>
                  {' '}
                  <FontAwesomeIcon icon={faPlus} color='#555' size='2x' />
                </Notes>
                <Notes>
                  {' '}
                  <FontAwesomeIcon icon={faPlus} color='#555' size='2x' />
                </Notes>
              </ItemsWrapper>
            </RightBarWrapper>
          </Wrapper>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Input = styled((props) => (
  <input {...R.omit(['withTopPadding'], props)} />
))`
  padding: 12px 20px;
  width: 160px;
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: 1rem;
  border: 1px solid #ccc;
  margin: 0 20px;
`
const Textarea = styled.textarea`
  padding: 12px 20px;
  width: 500px;
  height: 120px;
  border-radius: 1rem;
  border: 1px solid #ccc;
`

const Header = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftBarWrapper = styled.div`
  width: 300px;
  height: 400px;
  padding: 30px;
  margin: 60px;
  border: 1px #ddd solid;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RightBarWrapper = styled.div`
  padding: 0 20px;
  margin: 20px 0;
  width: 700px;
`

const Avator = styled((props) => (
  <div {...R.omit(['withTopPadding'], props)} />
))`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.width ? props.height : '160px')};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png');
  display: inline-block;
`

const Brief = styled.div`
  display: flex;
  padding: 0 0 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

const ItemsWrapper = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid #ccc;
`
const Notes = styled.button`
  &:hover {
    background-color: #eee;
  }
  width: 300px;
  height: 200px;
  border-radius: 1rem;
  border: 1px #ccc solid;
  margin: 0 20px 0 0;
  background-color: transparent;
  transition: 0.4s;
`

const Item = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
`
const ItemTitle = styled.h4`
  padding: 20px 0;
  font-weight: bold;
`
const ItemInner = styled.span`
  padding: 0 12px;
`
const ItemText = styled.span`
  display: block;
  color: #bbb;
  font-size: 14px;
`

const MoreButton = styled.button`
  &:hover {
    background-color: #dd0000;
  }
  background-color: #cc0000;
  border-radius: 10px;
  padding: 8px 60px;
  margin: 50px 0;
  color: #fff;
  border: none;
  transition: 0.4s;
`

export default Cases
