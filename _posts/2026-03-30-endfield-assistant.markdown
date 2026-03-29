---
layout: post
title: "Discord機器人：終末地簽到小助手"
date:   2026-03-30 00:00:00 +0800
categories: [項目, 開發日誌]
tags: [discord, endfield, bot]
---

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1.5rem;">
  <a href="https://discord.com/oauth2/authorize?client_id=1466362435782049817" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Add%20to%20Discord-Endfield%20Assistant-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Add to Discord" />
  </a>
  <a href="https://github.com/xydesu/endfield-assistant" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/GitHub-endfield--assistant-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>

> 一個用於自動化 [明日方舟：終末地簽到頁面](https://game.skport.com/endfield/sign-in) 每日簽到的 Discord 機器人。
>
> A Discord bot for automating daily sign-ins on the [Arknights: Endfield sign-in portal](https://game.skport.com/endfield/sign-in).

---

## 功能 / Features

- **帳號綁定 / Account binding** – 透過互動式視窗將你的終末地帳號綁定至 Discord 帳號（憑證使用 AES-256-CBC 加密儲存）
- **手動簽到 / Manual sign-in** – 使用 `/signin` 立即觸發簽到
- **排程簽到 / Scheduled sign-in** – 使用 `/schedule` 設定每日自動簽到時間
- **伺服器通知 / Guild notifications** – 將簽到結果發送至指定頻道
- **解除綁定 / Account unbinding** – 使用 `/unbind` 移除所有儲存的資料
- **玩家資料 / Player profile** – 使用 `/profile` 查看等級、體力、戰鬥通行證進度等
- **探索進度 / Exploration progress** – 使用 `/explore` 查看各地區探索狀態
- **成就展示 / Achievement showcase** – 使用 `/achieve` 顯示光榮之路成就卡片
- **體力通知 / Stamina notifications** – 使用 `/stamina-notify` 在體力達到設定閾值時發送提醒

---

## 指令 / Commands

| 指令 / Command | 說明 / Description | 權限 / Permission |
|---|---|---|
| `/help` | 列出所有可用指令 / List all available commands | 所有人 / Everyone |
| `/ping` | 檢查機器人延遲 / Check bot latency | 所有人 / Everyone |
| `/bind` | 綁定你的終末地帳號 / Bind your Endfield account | 所有人 / Everyone |
| `/unbind` | 解除綁定並刪除所有資料 / Remove binding and all stored data | 所有人 / Everyone |
| `/signin` | 立即執行簽到 / Perform an immediate sign-in | 所有人 / Everyone |
| `/schedule [time] [tag]` | 設定每日自動簽到時間 (HH:mm) / Set a daily auto sign-in time | 所有人 / Everyone |
| `/profile` | 查看玩家資料（等級、體力、BP 等）/ View player profile | 所有人 / Everyone |
| `/explore` | 查看各地區探索進度 / View per-area exploration progress | 所有人 / Everyone |
| `/achieve` | 查看成就展示（光榮之路）/ View achievement showcase | 所有人 / Everyone |
| `/stamina-notify <enable> [threshold] [tag]` | 設定體力滿通知 / Configure stamina-full notification | 所有人 / Everyone |
| `/set-notify-channel [channel]` | 設定伺服器通知頻道 / Set the guild notification channel | 管理員 / Administrator |

---

## 加入機器人 / Add the Bot

無需自行架設，直接使用以下連結邀請機器人至你的伺服器：

No self-hosting required — invite the bot to your server with the link below:

**👉 [邀請 Endfield Assistant / Invite Endfield Assistant](https://discord.com/oauth2/authorize?client_id=1466362435782049817)**

---

## 綁定方式 / How Binding Works

1. 在機器人可見的任意頻道執行 `/bind`。  
   Run `/bind` in any channel the bot can see.
2. 依照步驟說明，在瀏覽器中開啟簽到網站。  
   Follow the step-by-step instructions to open the sign-in website in a browser.
3. 開啟瀏覽器開發者控制台（`F12 → Console`），執行提供的腳本以擷取你的 Session 憑證。  
   Open the browser developer console (`F12 → Console`) and run the provided script to extract your session credentials.
4. 點擊 **輸入 Config** 後，將產生的 JSON 貼入彈出的視窗。  
   Paste the resulting JSON into the modal that opens when you click **輸入 Config**.
5. 憑證將以 AES-256-CBC 加密後儲存至本地 SQLite 資料庫。  
   Your credentials are encrypted with AES-256-CBC before being stored in the local SQLite database.

---

## 自行架設 / Self-Hosting

### 前置需求 / Prerequisites

- [Node.js](https://nodejs.org/) v18 以上 / v18 or later
- Discord 機器人 Token（[Discord Developer Portal](https://discord.com/developers/applications)）

### 安裝 / Installation

```bash
git clone https://github.com/xydesu/endfield-assistant.git
cd endfield-assistant
npm install
```

### 環境變數 / Environment Variables

在專案根目錄建立 `.env` 檔案 / Create a `.env` file in the project root:

```
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here        # 可選 / Optional
ENCRYPTION_KEY=your_64_character_hex_key_here
```

> **安全提示 / Security note：** 請勿將 `.env` 提交至版本控制。請妥善備份 `ENCRYPTION_KEY`，遺失後將無法解密現有憑證。  
> Do not commit `.env` to version control. Back up your `ENCRYPTION_KEY` securely; losing it will make existing credentials unrecoverable.

### 部署指令 / Deploy Commands

```bash
npm run deploy
```

### 啟動機器人 / Start the Bot

```bash
npm start
```

機器人首次執行時會同步 SQLite 資料庫，並自動還原所有排程簽到任務。  
The bot will sync the SQLite database on first run and restore all scheduled sign-in jobs automatically.

---

*GitHub: [xydesu/endfield-assistant](https://github.com/xydesu/endfield-assistant)*
