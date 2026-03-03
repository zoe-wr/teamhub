# 🚀 專案名稱：[例如：自動化庫存提醒工具]

這是一個基於 Google Apps Script 開發的自動化工具，旨在解決 [描述你解決的問題，例如：人工檢查庫存太慢] 的痛點。

## ✨ 主要功能
- 📥 **自動抓取**：定時從 Google Forms 抓取最新的報名資料。
- 📧 **即時通知**：當庫存低於門檻時，自動發送 Gmail 通知負責人。
- 📊 **報表生成**：每週一早上 8 點自動生成 PDF 報表並存入 Google Drive。

## 🛠️ 安裝與設定
1. 建立一個新的 [Google Sheets](https://sheets.new)。
2. 點擊 `擴充功能` > `Apps Script`。
3. 將本專案中的 `.gs` 檔案程式碼複製貼上，或使用 `clasp` / `GAS GitHub Assistant` 同步。
4. **設定指令碼屬性**：
   - 前往專案設定，新增 `EMAIL_RECIPIENT` (收件人信箱)。
   - 新增 `THRESHOLD` (警示門檻值)。

## ⚙️ 觸發器設定 (Triggers)
請在 Apps Script 控制台手動設定以下觸發器：
- 函數：`mainFunction` | 類型：`時間驅動` | 頻率：`每小時一次`

## 👤 作者
- **您的名字** - [你的 GitHub 主頁連結]
- 聯絡方式：[你的 Email 或 LinkedIn]

---
*本專案受 MIT 授權條款保護 - 詳情請參閱 LICENSE 檔案。*
