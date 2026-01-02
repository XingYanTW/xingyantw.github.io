---
layout: post
title:  "KALEIDXSCOPE Helper - maimai DX 歌曲篩選小工具"
date:   2026-01-02 15:00:00 +0800
categories: [項目]
tags: [maimai, javascript, tool, bookmarklet]
---

之前開發了一個名為 **KALEIDXSCOPE Helper** 的小工具，主要是為了方便在 maimai DX 的 NET 上篩選 KALEIDXSCOPE 模式的歌曲。

## 什麼是 KALEIDXSCOPE 模式？

KALEIDXSCOPE (KALEID×SCOPE) 是 **maimai でらっくす PRiSM** 版本中新增的遊戲模式，作為 Boss 曲的解禁系統。它的運作方式類似於 *maimai MiLK* 的 Survival Course，並被視為 *maimai FiNALE* 中 PANDORA BOXXX 的繼承者。

在這個模式中，玩家需要挑戰由 3 首歌曲組成的組曲 (Course)。
*   **生命值系統**: 採用特殊的生命值機制，非 Perfect 的判定會扣除生命值，生命值歸零則強制結束。
*   **階段 (Phase/Gate)**: 包含多個階段，每個階段對應不同的原創區域 (Area) 和 Boss 曲。
*   **解禁機制**: 隨著時間推移或玩家通關人數增加，挑戰條件（如生命值、難度限制）會逐漸放寬。

由於不同階段 (Gate) 對應著不同的歌曲池，有時候想要快速把某個階段的歌曲加入收藏以便練習，手動一個一個找實在是有點麻煩。於是就有了這個小工具的誕生！

## 專案簡介

**KALEIDXSCOPE Helper** 是一個書籤小工具 (Bookmarklet)，可以直接在瀏覽器中執行。它會在 maimai DX 的「收藏歌曲」頁面上顯示一個控制面板，讓你能夠快速篩選並勾選特定 Gate 的歌曲。

*   **GitHub 儲存庫**: [XingYanTW/KALEIDXSCOPE-Helper](https://github.com/XingYanTW/KALEIDXSCOPE-Helper)

![UI 預覽](https://raw.githubusercontent.com/XingYanTW/KALEIDXSCOPE-Helper/refs/heads/main/docs/UI_ZH_TW.png)

## 主要功能

*   **自動篩選**: 只要勾選你想要的 Gate (Phase)，點擊儲存後，工具會自動幫你在頁面上勾選所有符合該階段的歌曲。
*   **多語言支援**: 內建繁體中文、英文 (English) 和日文 (日本語) 介面，方便不同地區的玩家使用。
*   **簡單易用**: 不需要安裝任何瀏覽器擴充功能，只需要一個書籤即可使用。

## 安裝方法

安裝非常簡單，只需要將一段 JavaScript 代碼加入瀏覽器的書籤即可。

1.  在瀏覽器中新增一個書籤（我的最愛）。
2.  將書籤名稱取為你喜歡的名字，例如 `KALEIDXSCOPE Helper`。
3.  在網址（URL）欄位中，貼上以下代碼：

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@latest/main.js';s.crossOrigin='anonymous';document.body.appendChild(s);})();
```

## 使用教學

1.  登入 maimai DX NET，並進入「收藏歌曲 (Favorite Music)」設定頁面。
    *   網址通常是：`https://maimaidx-eng.com/maimai-mobile/home/userOption/favorite/musicList`
2.  點擊你剛剛建立的書籤。
3.  頁面右上方會出現 **KALEIDXSCOPE Gate Helper** 的面板。
4.  (可選) 在下拉選單中切換你習慣的語言。
5.  勾選你想要篩選的 **Gate**。
6.  點擊 **「儲存選擇 (Save Gate Selection)」**。
7.  工具會自動幫你勾選對應的歌曲，最後別忘了滑到頁面最下方按下網站原本的確認按鈕來儲存變更喔！

## 結語

這個工具主要是為了解決我自己在使用上的痛點，希望也能幫助到其他的 maimai 玩家。如果你在使用上有任何問題，或者有新的功能建議，歡迎到 GitHub 上提 Issue 或 PR！

Happy Maimai! 👋
