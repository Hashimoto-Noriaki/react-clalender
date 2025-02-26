import React from 'react'
import { NotLoginLayout } from '../templates/NotLoginLayout';
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const TopPage = () => {
  return (
    <NotLoginLayout>
        <div className="text-center">
          <h1 className="logo text-7xl">スケジュール管理APP</h1>
          <p className="text-5xl pt-[20vh]">スケジュールの管理をします。</p>
          <div className="pt-[20vh]">
            <PrimaryBtn>ログイン</PrimaryBtn>
          </div>
        </div>
    </NotLoginLayout>
  )
}