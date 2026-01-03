---
layout: page
title: 關於我
permalink: /about/
---

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 2rem;">
  <img src="https://avatars.githubusercontent.com/u/46369463?v=4" alt="XingYanTW Avatar" style="border-radius: 50%; width: 100px; height: 100px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <div>
    <h2 style="margin: 0; font-size: 1.8rem;">XingYanTW</h2>
    <div style="color: #666; margin: 5px 0; display: flex; align-items: center; gap: 10px;">
      <span>來自台灣的開發者 | </span>
      <img src="https://skillicons.dev/icons?i=java,js,html,cs" height="20" alt="Skills" />
    </div>
    <div style="font-size: 0.9rem; display: flex; align-items: center; gap: 15px;">
        <a href="https://github.com/XingYanTW" style="text-decoration: none; display: flex; align-items: center; gap: 5px; color: #666;">
            <img src="https://skillicons.dev/icons?i=github" height="20" alt="GitHub" />
            <span>GitHub</span>
        </a>
        <a href="https://twitter.com/tw_xing" style="text-decoration: none; display: flex; align-items: center; gap: 5px; color: #666;">
            <img src="https://skillicons.dev/icons?i=twitter" height="20" alt="Twitter" />
            <span>Twitter</span>
        </a>
        <span onclick="const el = this.querySelector('span'); const original = el.innerText; navigator.clipboard.writeText('sunaookami_shiroko').then(() => { el.innerText = 'Copied!'; setTimeout(() => { el.innerText = original; }, 2000); })" style="cursor: pointer; display: flex; align-items: center; gap: 5px; color: #666;" title="Click to copy username: sunaookami_shiroko">
            <img src="https://skillicons.dev/icons?i=discord" height="20" alt="Discord" />
            <span>Discord</span>
        </span>
    </div>
  </div>
</div>

<h3 style="margin-bottom: 1rem;">精選項目</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/Core">Core</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">Minecraft RPG 核心插件：自訂生物、物品、GUI 與玩家數據系統。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=java" height="16" alt="Java" />
      <span>Java</span>
    </div>
  </div>

  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/StopTimer">StopTimer</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">伺服器自動關機倒數插件，支援 Discord 通知與 PlaceholderAPI。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=java" height="16" alt="Java" />
      <span>Java</span>
    </div>
  </div>

  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/Arcade-Update-Bot">Arcade-Update-Bot</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">maimai DX, Ongeki, Chunithm 更新通知機器人。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=js" height="16" alt="JavaScript" />
      <span>JavaScript</span>
    </div>
  </div>

  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/SaltBot">SaltBot</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">maimai DX 相關功能的 Discord 機器人，包含查歌與小遊戲。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=js" height="16" alt="JavaScript" />
      <span>JavaScript</span>
    </div>
  </div>

  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/Galgame-CG">Galgame-CG</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">提供隨機 Galgame CG 圖片的 API 服務。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=ts" height="16" alt="TypeScript" />
      <span>TypeScript</span>
    </div>
  </div>

  <div style="border: 1px solid var(--border-color, #eee); padding: 1rem; border-radius: 8px; transition: transform 0.2s; display: flex; flex-direction: column;">
    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;"><a href="https://github.com/XingYanTW/KALEIDXSCOPE-Helper">KALEIDXSCOPE-Helper</a></h4>
    <p style="font-size: 0.9rem; margin: 0 0 0.5rem 0; color: var(--text-color-light, #666);">maimai DX 網頁小工具，協助篩選 KALEIDXSCOPE 區域歌曲。</p>
    <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #666; margin-top: auto;">
      <img src="https://skillicons.dev/icons?i=js" height="16" alt="JavaScript" />
      <span>JavaScript</span>
    </div>
  </div>
</div>
