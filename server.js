// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'smarthouse',
// });

// mongoose.connect('mongodb://localhost:27017/smarthouse', { useNewUrlParser: true, useUnifiedTopology: true });


// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// class User {
//     constructor(username, password, usertype) {
//       this.username = username;
//       this.password = password;
//       this.usertype = usertype;
//     }
//   }

//   const reviewSchema = new mongoose.Schema({
//     productModelName: String,
//     userId: String,
//     reviewRating: Number,
//     reviewText: String,
//     productCategory: String,
//     productPrice: Number,
//     storeId: Number,
//     storeCity: String,
//     storeState: String,
//     storeZip: Number,
//     productOnSale: String,
//     manufacturerName: String,
//     manufacturerRebate: String,
//     userAge: Number,
//     userGender: String,
//     userOccupation: String,
//     reviewRating: Number,
//     reviewDate: Date,
//     reviewText: String
//   });
  
// const ReviewModel = mongoose.model('reviews', reviewSchema);

//   app.post('/api/writeReview', async (req, res) => {
//     const {
//       productModelName,
//       userId,
//       reviewRating,
//       reviewText,
//       productCategory,
//       productPrice,
//       storeId,
//       storeCity,
//       storeState,
//       storeZip,
//       productOnSale,
//       manufacturerName,
//       manufacturerRebate,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//     } = req.body;
  
//     try {
//       const review = new ReviewModel({
//         productModelName,
//         userId,
//         reviewRating,
//         reviewText,
//         productCategory,
//         productPrice,
//         storeId,
//         storeCity,
//         storeState,
//         storeZip,
//         productOnSale,
//         manufacturerName,
//         manufacturerRebate,
//         userAge,
//         userGender,
//         userOccupation,
//         reviewDate,
//       });
  
//       await review.save();
//       res.status(201).send('Review added successfully');
//     } catch (error) {
//       console.error('Error adding review:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });




// app.post('/api/getReviews', async (req, res) => {
//   try {
//       const { productModelName } = req.query;
//       console.log(productModelName)

//       const filter = productModelName ? { productModelName } : {};
//       console.log('filter', filter)
//       const reviews = await ReviewModel.find(filter);
//       console.log('reviews', reviews)
//       res.status(200).json(reviews);
//   } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).send('Internal Server Error');
//   }
// });

  

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
  
//     const selectUserQuery = 'SELECT * FROM registration WHERE username = ? AND password = ?';
  
//     db.query(selectUserQuery, [username, password], (err, results) => {
//       if (err) {
//         console.error('Error selecting user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         console.log(results)
//         if (results.length > 0) {
//           const user = new User(
//             results[0].username,
//             results[0].password,
//             results[0].usertype
//           );
//           console.log(user);
//           res.send({
//             status:200,
//             message:"Login Successful",
//             data:{user}
//           });
//         //   res.status(200).json({ user });
//         } else {
//           res.status(401).send('Invalid credentials');
//         }
//       }
//     });
//   });

// app.get('/api/getAllProducts', (req, res) => {
//     const query = 'SELECT * FROM ProductDetails';
//     db.query(query, (err, result) => {
//       if (err) {
//         console.error('Error executing query:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.json(result);
//       }
//     });
//   });

// app.post('/api/getProducts', (req, res) => {
//   const { ProductType } = req.body;

//   const getProductQuery =
//     'SELECT * FROM ProductDetails WHERE ProductType = ?';

//   db.query(getProductQuery, [ProductType], (err, result) => {
//     if (err) {
//       console.error('Error getting products:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // Assuming 'result' is an array of product objects
//       res.status(200).json({ products: result });
//     }
//   });
// });

// app.post('/api/getProduct', (req, res) => {
//   const { ProductName } = req.body;

//   const getProductQuery =
//     'SELECT * FROM ProductDetails WHERE ProductName = ?';

//   db.query(getProductQuery, [ProductName], (err, result) => {
//     if (err) {
//       console.error('Error getting product:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // Assuming 'result' is an array of product objects
//       res.status(200).json({ products: result });
//     }
//   });
// });

//   app.post('/api/registerUser', (req, res) => {
//     const { username, password, repassword, usertype } = req.body;
  
//     const registerUserQuery =
//       'INSERT INTO registration (username, password, repassword, usertype) VALUES (?, ?, ?, ?)';
  
//     db.query(registerUserQuery, [username, password, repassword, usertype], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('User registered successfully');
//       }
//     });
//   });

//   app.post('/api/addProduct', (req, res) => {
//     const { productName, productType, productPrice, productImage, productManufacturer, 
//       productCondition, productDiscount, productDescription} = req.body;
  
//     const addProductQuery =
//       'INSERT INTO ProductDetails (productName, productType, productPrice, productImage, productManufacturer, productCondition, productDiscount, productDescription) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
//     db.query(addProductQuery, [productName, productType, productPrice, productImage, productManufacturer, 
//       productCondition, productDiscount, productDescription], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Product Added successfully');
//       }
//     });
//   });
  
//   app.post('/api/addOrder', (req, res) => {
//     const { orderId, userName, productName, productPrice, street, creditCard, deliveryMethod, storeLocation} = req.body;
  
//     const addOrderQuery =
//       'INSERT INTO CustomerOrders (OrderId, userName, orderName, orderPrice, userAddress, creditCardNo, deliveryMethod, storeLocation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
//     db.query(addOrderQuery, [orderId, userName, productName,productPrice, street, creditCard, deliveryMethod, storeLocation], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Order Added successfully');
//       }
//     });
//   });
//   app.post('/api/deleteProduct', (req, res) => {
//     const { productName } = req.body;
  
//     const deleteProductQuery =
//       'DELETE FROM ProductDetails WHERE productName= ?';
  
//     db.query(deleteProductQuery, [productName], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Product Deleted successfully');
//       }
//     });
//   });

//   // app.post('/api/updateProduct', (req, res) => {
//   //   const { productName, productPrice,productDescription ,productManufacturer,productDiscount, productCondition } = req.body;
  
//   //   const deleteProductQuery =
//   //     'UPDATE ProductDetails WHERE productName= ? VALUES';
  
//   //   db.query(deleteProductQuery, [productName], (err, result) => {
//   //     if (err) {
//   //       console.error('Error registering user:', err);
//   //       res.status(500).send('Internal Server Error');
//   //     } else {
//   //       res.status(200).send('Product Deleted successfully');
//   //     }
//   //   });
//   // });

//   app.post('/api/updateProduct', (req, res) => {
//     const {
//       productName,
//       productPrice,
//       productDescription,
//       productManufacturer,
//       productDiscount,
//       productCondition,
//     } = req.body;
  
//     const updateProductQuery = `
//       UPDATE ProductDetails
//       SET productPrice = ?,
//           productDescription = ?,
//           productManufacturer = ?,
//           productDiscount = ?,
//           productCondition = ?
//       WHERE productName = ?
//     `;
  
//     db.query(
//       updateProductQuery,
//       [
//         productPrice,
//         productDescription,
//         productManufacturer,
//         productDiscount,
//         productCondition,
//         productName,
//       ],
//       (err, result) => {
//         if (err) {
//           console.error('Error updating product:', err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).send('Product updated successfully');
//         }
//       }
//     );
//   });

//   app.post('/api/addCustomer', (req, res) => {
//     const { name, password, usertype } = req.body;
  
//     const addCustomerQuery = `
//       INSERT INTO Registration (username, password, repassword, usertype)
//       VALUES (?, ?, ?, ?)
//     `;
  
//     db.query(
//       addCustomerQuery,
//       [name, password, password, usertype],
//       (err, result) => {
//         if (err) {
//           console.error('Error adding customer:', err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).send('Customer added successfully');
//         }
//       }
//     );
//   });
  
  

//   app.get('/api/getStores', (req,res) =>{
//     let sql = "SELECT * from store";
//     db.query(sql,(err,result)=>{
//       if (err) {
//         console.error('Error getting stores:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   })

//   app.get('/api/getOrders', (req,res) =>{
//     let sql = "SELECT * from CustomerOrders";
//     db.query(sql,(err,result)=>{
//       if (err) {
//         console.error('Error getting orders:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   })

//   app.post('/api/getOrder', (req, res) => {
//     const { userName } = req.body;
  
//     const getOrderQuery =
//       'SELECT * FROM CustomerOrders WHERE userName= ?';
  
//     db.query(getOrderQuery, [userName], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'smarthouse',
});

mongoose.connect('mongodb://localhost:27017/smarthouse', { useNewUrlParser: true, useUnifiedTopology: true });


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

class User {
    constructor(username, password, usertype) {
      this.username = username;
      this.password = password;
      this.usertype = usertype;
    }
  }

  const reviewSchema = new mongoose.Schema({
    productModelName: String,
    userId: String,
    reviewRating: Number,
    reviewText: String,
    productCategory: String,
    productPrice: Number,
    storeId: Number,
    storeCity: String,
    storeState: String,
    storeZip: Number,
    productOnSale: String,
    manufacturerName: String,
    manufacturerRebate: String,
    userAge: Number,
    userGender: String,
    userOccupation: String,
    reviewRating: Number,
    reviewDate: Date,
    reviewText: String
  });
  
const ReviewModel = mongoose.model('reviews', reviewSchema);

  app.post('/api/writeReview', async (req, res) => {
    const {
      productModelName,
      userId,
      reviewRating,
      reviewText,
      productCategory,
      productPrice,
      storeId,
      storeCity,
      storeState,
      storeZip,
      productOnSale,
      manufacturerName,
      manufacturerRebate,
      userAge,
      userGender,
      userOccupation,
      reviewDate,
    } = req.body;
  
    try {
      const review = new ReviewModel({
        productModelName,
        userId,
        reviewRating,
        reviewText,
        productCategory,
        productPrice,
        storeId,
        storeCity,
        storeState,
        storeZip,
        productOnSale,
        manufacturerName,
        manufacturerRebate,
        userAge,
        userGender,
        userOccupation,
        reviewDate,
      });
  
      await review.save();
      res.status(201).send('Review added successfully');
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).send('Internal Server Error');
    }
  });




app.post('/api/getReviews', async (req, res) => {
  try {
      const { productModelName } = req.query;
      console.log(productModelName)

      const filter = productModelName ? { productModelName } : {};
      console.log('filter', filter)
      const reviews = await ReviewModel.find(filter);
      console.log('reviews', reviews)
      res.status(200).json(reviews);
  } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).send('Internal Server Error');
  }
});

  

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const selectUserQuery = 'SELECT * FROM registration WHERE username = ? AND password = ?';
  
    db.query(selectUserQuery, [username, password], (err, results) => {
      if (err) {
        console.error('Error selecting user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(results)
        if (results.length > 0) {
          const user = new User(
            results[0].username,
            results[0].password,
            results[0].usertype
          );
          console.log(user);
          res.send({
            status:200,
            message:"Login Successful",
            data:{user}
          });
        //   res.status(200).json({ user });
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });
  });

app.get('/api/getAllProducts', (req, res) => {
    const query = 'SELECT * FROM ProductDetails';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/api/onSale', (req, res) => {
    const query = `SELECT * FROM ProductDetails WHERE productCondition = 'New'`;
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/api/onRebate', (req, res) => {
    const query = 'SELECT * FROM ProductDetails WHERE productDiscount > 0';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });


  // API endpoint to get sales information
app.get('/api/sales', (req, res) => {
  // SQL query to get distinct order names, sale amounts, and order prices
  const sqlQuery = `
    SELECT DISTINCT orderName, COUNT(orderName) AS saleAmount, AVG(orderPrice) AS avgOrderPrice
    FROM CustomerOrders
    GROUP BY orderName
  `;

  // Execute the query
  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send the results as JSON
      res.json({ sales: results });
    }
  });
});

app.get('/api/totalSales', (req, res) => {
  const sqlQuery = 'SELECT * FROM CustomerOrders';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log(results)
      res.json({ totalSales: results });
    }
  });
});

// router.get('/dailyTransactions', (req, res) => {
//   const sqlQuery = 'SELECT DATE(orderTime) AS date, COUNT(*) AS soldAmount FROM CustomerOrders GROUP BY date';

//   db.query(sqlQuery, (error, results) => {
//     if (error) {
//       console.error('Error executing SQL query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// Route for fetching daily transactions
app.get('/dailyTransactions', (req, res) => {
  const sqlQuery = 'SELECT OrderId, COUNT(*) AS soldAmount FROM CustomerOrders GROUP BY OrderId';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


app.get('/productSales', (req, res) => {
  const sqlQuery = 'SELECT orderName, SUM(orderPrice) AS totalSales FROM CustomerOrders GROUP BY orderName';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/api/getProducts', (req, res) => {
  const { ProductType } = req.body;

  const getProductQuery =
    'SELECT * FROM ProductDetails WHERE ProductType = ?';

  db.query(getProductQuery, [ProductType], (err, result) => {
    if (err) {
      console.error('Error getting products:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Assuming 'result' is an array of product objects
      res.status(200).json({ products: result });
    }
  });
});

app.post('/api/getProduct', (req, res) => {
  const { ProductName } = req.body;

  const getProductQuery =
    'SELECT * FROM ProductDetails WHERE ProductName = ?';

  db.query(getProductQuery, [ProductName], (err, result) => {
    if (err) {
      console.error('Error getting product:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Assuming 'result' is an array of product objects
      res.status(200).json({ products: result });
    }
  });
});

  app.post('/api/registerUser', (req, res) => {
    const { username, password, repassword, usertype } = req.body;
  
    const registerUserQuery =
      'INSERT INTO registration (username, password, repassword, usertype) VALUES (?, ?, ?, ?)';
  
    db.query(registerUserQuery, [username, password, repassword, usertype], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('User registered successfully');
      }
    });
  });

  app.post('/api/addProduct', (req, res) => {
    const { productName, productType, productPrice, productImage, productManufacturer, 
      productCondition, productDiscount, productDescription, inventory} = req.body;
  
    const addProductQuery =
      'INSERT INTO ProductDetails (productName, productType, productPrice, productImage, productManufacturer, productCondition, productDiscount, productDescription, inventory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(addProductQuery, [productName, productType, productPrice, productImage, productManufacturer, 
      productCondition, productDiscount, productDescription, inventory], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Product Added successfully');
      }
    });
  });
  
  app.post('/api/addOrder', (req, res) => {
    const { orderId, userName, productName, productPrice, street, creditCard, deliveryMethod, storeLocation} = req.body;
  
    const addOrderQuery =
      'INSERT INTO CustomerOrders (OrderId, userName, orderName, orderPrice, userAddress, creditCardNo, deliveryMethod, storeLocation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(addOrderQuery, [orderId, userName, productName,productPrice, street, creditCard, deliveryMethod, storeLocation], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Order Added successfully');
      }
    });
  });
  app.post('/api/deleteProduct', (req, res) => {
    const { productName } = req.body;
  
    const deleteProductQuery =
      'DELETE FROM ProductDetails WHERE productName= ?';
  
    db.query(deleteProductQuery, [productName], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Product Deleted successfully');
      }
    });
  });

  // app.post('/api/updateProduct', (req, res) => {
  //   const { productName, productPrice,productDescription ,productManufacturer,productDiscount, productCondition } = req.body;
  
  //   const deleteProductQuery =
  //     'UPDATE ProductDetails WHERE productName= ? VALUES';
  
  //   db.query(deleteProductQuery, [productName], (err, result) => {
  //     if (err) {
  //       console.error('Error registering user:', err);
  //       res.status(500).send('Internal Server Error');
  //     } else {
  //       res.status(200).send('Product Deleted successfully');
  //     }
  //   });
  // });

  app.post('/api/updateProduct', (req, res) => {
    const {
      productName,
      productPrice,
      productDescription,
      productManufacturer,
      productDiscount,
      productCondition,
    } = req.body;
  
    const updateProductQuery = `
      UPDATE ProductDetails
      SET productPrice = ?,
          productDescription = ?,
          productManufacturer = ?,
          productDiscount = ?,
          productCondition = ?
      WHERE productName = ?
    `;
  
    db.query(
      updateProductQuery,
      [
        productPrice,
        productDescription,
        productManufacturer,
        productDiscount,
        productCondition,
        productName,
      ],
      (err, result) => {
        if (err) {
          console.error('Error updating product:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).send('Product updated successfully');
        }
      }
    );
  });

  app.post('/api/addCustomer', (req, res) => {
    const { name, password, usertype } = req.body;
  
    const addCustomerQuery = `
      INSERT INTO Registration (username, password, repassword, usertype)
      VALUES (?, ?, ?, ?)
    `;
  
    db.query(
      addCustomerQuery,
      [name, password, password, usertype],
      (err, result) => {
        if (err) {
          console.error('Error adding customer:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).send('Customer added successfully');
        }
      }
    );
  });
  
  

  app.get('/api/getStores', (req,res) =>{
    let sql = "SELECT * from store";
    db.query(sql,(err,result)=>{
      if (err) {
        console.error('Error getting stores:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.get('/api/getOrders', (req,res) =>{
    let sql = "SELECT * from CustomerOrders";
    db.query(sql,(err,result)=>{
      if (err) {
        console.error('Error getting orders:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.post('/api/getOrder', (req, res) => {
    const { userName } = req.body;
  
    const getOrderQuery =
      'SELECT * FROM CustomerOrders WHERE userName= ?';
  
    db.query(getOrderQuery, [userName], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    });
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
