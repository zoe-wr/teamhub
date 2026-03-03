/**
 * 1. Web App 入口
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Team Matt 團隊資源中心')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
/**
 * 2. 獲取使用者資訊
 */
function getUserInfo() {
  try {
    const email = Session.getActiveUser().getEmail().toLowerCase();
    const teamMembers = {
      "matt.yc@meshplus.com.tw": "Matt",
      "zoe.wr@meshplus.com.tw": "Zoe",
      "celia.yp@meshplus.com.tw": "Celia",
      "mint.mj@meshplus.com.tw": "Mint",
      "abby.yx@meshplus.com.tw": "Abby",
      "ines.ey@mdcg.tw": "N1",
    };
    const displayName = teamMembers[email] || email.split('@')[0];
    return { email: email, name: displayName };
  } catch (e) {
    return { email: "Guest", name: "團隊成員" };
  }
}