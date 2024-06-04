const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
const PORT = 3500; 

// Sử dụng các middleware tích hợp của Express để xử lý request body 
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

let data = [];

// Route để nhận dữ liệu từ board và lưu trữ vào server (tương đương với URL_POSTDuLieuTuBoardLenServer)
app.post('/api/BoardSTR423_DuLieu', async (req, res) => {  
  try { 
    const newData = req.body;  
    data = await updateDataAsync(newData); 
    res.json(data); 
  } catch (error) { 
    res.status(500).send('Có lỗi xảy ra'); 
  } 
});  

// Route để gửi lệnh xuống board (tương đương với URL_GETLenhGuiXuongBoard)
app.get('/api/BoardSTR423_DuLieuGuiXuongBoard', (req, res) => {
  const { CheDo, key } = req.query;
  // Ở đây bạn có thể xử lý CheDo và key nếu cần thiết
  res.send(data); 
});

// Route để cập nhật code hoặc dữ liệu nào đó xuống board (tương đương với URL_CapNhatCODE)
app.post('/api/BoardSTR423_DuLieuGuiXuongBoard', async (req, res) => {  
  try { 
    const newData = req.body;  
    data = await updateDataAsync(newData); 
    res.json(data); 
  } catch (error) { 
    res.status(500).send('Có lỗi xảy ra'); 
  } 
});  

async function updateDataAsync(newData) { 
  return new Promise((resolve) => setTimeout(() => resolve(newData), 100)); 
} 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/BoardSTR423_DuLieu`);
  console.log(`Server is running on http://localhost:${PORT}/api/BoardSTR423_DuLieuGuiXuongBoard?CheDo=1&key=`);
  console.log(`Server is running on http://localhost:${PORT}/api/BoardSTR423_DuLieuGuiXuongBoard`);
});
