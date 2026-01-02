---
layout: post
title:  "專案介紹：Galgame CG - 隨機 Galgame CG API"
date:   2026-01-02 12:00:00 +0800
categories: project
tags: [galgame, api, nextjs]
---

這個專案是我為了朋友間用的OpenList所開發的：[Galgame-CG](https://github.com/XingYanTW/Galgame-CG)。

這是一個簡單的 API 服務，主要功能是提供隨機的 Galgame CG 圖片。如果你需要在網站或個人專案中展示隨機的動漫風格背景或圖片，這個專案或許能派上用場。

## 專案連結

- **GitHub Repository**: [https://github.com/XingYanTW/Galgame-CG](https://github.com/XingYanTW/Galgame-CG)
- **Live Demo**: [https://galgame-cg.vercel.app/](https://galgame-cg.vercel.app/)

## 使用方式

使用非常簡單，只需要呼叫 API URL 即可取得圖片。

### HTML 範例

直接在 `<img>` 標籤中使用：

```html
<img src='https://galgame-cg.vercel.app/api/random-image' alt='Random Galgame CG'/>
```

### CSS 範例

也可以用作背景圖片：

```css
.background {
  background-image: url('https://galgame-cg.vercel.app/api/random-image');
  background-size: cover;
  background-position: center;
}
```

## 開發與部署

這個專案是使用 Next.js 開發，並部署在 Vercel 上。

如果你想要在本地端執行：

1.  Clone 專案：
    ```bash
    git clone https://github.com/XingYanTW/Galgame-CG.git
    cd Galgame-CG
    ```
2.  安裝依賴：
    ```bash
    yarn install
    ```
3.  啟動開發伺服器：
    ```bash
    yarn dev
    ```

## 如何貢獻 (CG 推薦)

如果你有喜歡的 Galgame CG 想要分享，歡迎貢獻到這個專案！

1.  **Fork** 此專案。
2.  將圖片檔案放入 `public/images` 資料夾。
3.  提交 **Pull Request**。

或者，你也可以透過 [Issue](https://github.com/XingYanTW/Galgame-CG/issues/new) 頁面提交建議。

---

希望這個小工具對你有幫助！如果有任何問題，歡迎到 GitHub 上留言。
