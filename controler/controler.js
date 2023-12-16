const mysql_pool = require("../mysqlPool/mysqlPool").mysql_pool;
// const jwt = require('jsonwebtoken');

// const payload = {
//   userId: 12345,
//   role: 'user',
//   // exp: Math.floor(Date.now() / 1000) + (60 * 60)
// };
// const secret = 'hfhsiuheaiuhvure';
// const token = jwt.sign(payload, secret, { expiresIn: '1h' });

// console.log(token);
//  const decoded = jwt.verify(token, secret);

// console.log(decoded);

exports.getCategory = (req, res) => {
  let str = "select * from category";
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          // console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.getBrands = (req, res) => {
  let categoryId = req.query.categoryId;
  // console.log(categoryId);
  let str = `select * from brands where category_id=${categoryId}`;
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          // console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.getList = (req, res) => {
  let brandName = req.query.brand_name;
  // console.log(brandName);
  let str = `select * from product_list where brand_name='${brandName}' `;
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          // console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.getDetails = (req, res) => {
  let listId  = req.query.list_id;
  console.log(listId);
  let str = `select * from product_list where list_id=${listId}`;
  mysql_pool.getConnection((err, con) => {
    if (err) {
      console.log(chsyu);
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          // console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.postDetails = (req, res) => {
  console.log(req.filePath);
  console.log(req.filePath[0]);
  let img=req.filePath
  console.log(img);
  let str = `INSERT INTO product_list(brand_name,title,ram,rating,price,color,description,img) VALUES ('${req.body.brand_name}','${req.body.title}','${req.body.ram}','${req.body.rating}',${req.body.price},'${req.body.color}','${req.body.description}','[${img}]')`;
console.log(str);
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.postSinginDetails = (req, res) => {
  
  console.log(req.body);
  const {email,password,remember}=req.body
  let str = `INSERT INTO signin( email, password, remember) VALUES ('${email}','${password}','${remember}')`;
console.log(str);
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};

exports.postSingupDetails = (req, res) => {
  
  console.log(req.body);
  const {fullName,email,password,repeatPassword,phoneNumber,remember}=req.body
  let str = `INSERT INTO signup( full_name,email, password,repeat_password,phone_number,remember) VALUES ('${fullName}','${email}','${password}','${repeatPassword}','${phoneNumber}','${remember}')`;
console.log(str);
  mysql_pool.getConnection((err, con) => {
    if (err) {
      err.sendErrorObj(
        res,
        err.con_err,
        "got error in connection pool in samplePost: " + err
      );
    } else {
      con.query(str, (err, results, fields) => {
        con.release(); //release the connection to the pool immediately
        if (err) {
          err.sendErrorObj(
            res,
            err.query_err,
            "got error in executing query in samplePost: " + err
          );
        } else {
          console.log(results);
          // res.status(200).json(results)
          res.send(results);
        }
      });
    }
  });
};






