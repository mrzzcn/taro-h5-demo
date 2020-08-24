import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const toDemo1 = useCallback(() => {
    Taro.navigateTo({ url: '/pages/demo/demo1' })
  }, [])
  const toDemo2 = useCallback(() => {
    Taro.navigateTo({ url: '/pages/demo/demo2?from=index' })
  }, [])
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={toDemo1}>
        Demo1
      </Button>
      <Button onClick={toDemo2}>
        Demo2
      </Button>
    </View>
  )
}
