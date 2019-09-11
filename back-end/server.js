
import app from './app';

const PORT = process.env.PORT || '8000'; //your severe port here

app.listen(PORT, () => {
  console.log(`Server run at http://localhost:${PORT}`);
});



