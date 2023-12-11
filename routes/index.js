var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
}); 


/* BCA NOTES page. */
  /*.................................. 1 Sem .................................*/
router.get("/1sem",function(req,res){
  res.render("1sem")
})
router.get("/pc-software-1sem.pdf",function(req,res){
  res.download("./public/docs/pc-software-1sem.pdf")
})
router.get("/c-language-1sem.pdf",function(req,res){
  res.download("./public/docs/c-language-1sem.pdf")
})
router.get("/COMPUTER-ORGANIZATION-1sem.pdf",function(req,res){
  res.download("./public/docs/COMPUTER-ORGANIZATION-1sem.pdf")
})
router.get("/it-1sem.pdf",function(req,res){
  res.download("./public/docs/it-1sem.pdf")
})

  /* .........................................................2 Sem .................... */
router.get("/2sem",function(req,res){
  res.render("2sem")
})
router.get("/Data-Structure-2sem.pdf",function(req,res){
  res.download("./public/docs/Data-Structure-2sem.pdf")
})
router.get("/Discrete-Mathametics-2sem.pdf",function(req,res){
  res.download("./public/docs/Discrete-Mathametics-2sem.pdf")
})
router.get("/System-Analysis-And-Design-2sem.pdf",function(req,res){
  res.download("./public/docs/System-Analysis-And-Design-2sem.pdf")
})



/* .........................................................3 Sem .................... */
router.get("/3sem",function(req,res){
  res.render("3sem")
})
router.get("/Java-Programming-3sem.pdf",function(req,res){
  res.download("./public/docs/Java-Programming-3sem.pdf")
})
router.get("/Software-Engineering-3sem.pdf",function(req,res){
  res.download("./public/docs/Software-Engineering-3sem.pdf")
})
router.get("/O.S-3sem.pdf",function(req,res){
  res.download("./public/docs/O.S-3sem.pdf")
})
router.get("/Java Programming 3sem.pdf",function(req,res){
  res.download("./public/docs/Java Programming 3sem.pdf")
})
router.get("/cbnst_compressed.pdf",function(req,res){
  res.download("./public/docs/cbnst_compressed.pdf")
})
/* .........................................................4 Sem .................... */
router.get("/4sem",function(req,res){
  res.render("4sem")
})
router.get("/Design-&-Analysis-of-Algorithm-4sem.pdf",function(req,res){
  res.download("./public/docs/Design-&-Analysis-of-Algorithm-4sem.pdf")
})
router.get("/DBMS-4sem.pdf",function(req,res){
  res.download("./public/docs/DBMS-4sem.pdf")
})
router.get("/Optimization-Techniques-4sem.pdf",function(req,res){
  res.download("./public/docs/Optimization-Techniques-4sem.pdf")
})
router.get("/Computer-Graphics-&-Animation-4sem.pdf",function(req,res){
  res.download("./public/docs/Computer-Graphics-&-Animation-4sem.pdf")
})
router.get("/DAA-HANDWRITEN.pdf",function(req,res){
    res.download("./public/docs/DAA-HANDWRITEN.pdf")
  })
  router.get("/OT-HANDWRITEN.pdf",function(req,res){
    res.download("./public/docs/OT-HANDWRITEN.pdf")
  })
/* .........................................................5 Sem .................... */
router.get("/5sem",function(req,res){
  res.render("5sem")
})
router.get("/Web-Design-5sem.pdf",function(req,res){
  res.download("./public/docs/Web-Design-5sem.pdf")
})
router.get("/Data-Mining-5sem.pdf",function(req,res){
  res.download("./public/docs/Data-Mining-5sem.pdf")
})
router.get("/Net-Framework-5sem.pdf",function(req,res){
  res.download("./public/docs/Net-Framework-5sem.pdf")
})


/* .........................................................6 Sem .................... */
router.get("/6sem",function(req,res){
  res.render("6sem")
})
router.get("/E-Commerce-6sem.pdf",function(req,res){
  res.download("./public/docs/E-Commerce-6sem.pdf")
})
router.get("/Multimedia-System-6sem.pdf",function(req,res){
  res.download("./public/docs/Multimedia-System-6sem.pdf")
})


/* hindi blog page. */
router.get("/about",function(req,res){
  res.render("about")
})
/* question paper */
router.get("/quespap",function(req,res){
  res.render("quespap");
})
/* select semester */
router.get("/selectsem",function(req,res){
  res.render("selectsem");
})
router.get("/samepaper",function(req,res){
  res.render("samepaper");
})


/* ..................................................................question sem 1*/
router.get("/q1sem",function(req,res){
  res.render("q1sem");
})
router.get("/bca-1-sem-computer-organization-23-156-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-computer-organization-23-156-c-2023.pdf")
})
router.get("/bca-1-sem-fundamental-of-information-technology-23-158-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-fundamental-of-information-technology-23-158-c-2023.pdf")
})
router.get("/bca-1-sem-pc-software-23-155-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-pc-software-23-155-c-2023.pdf")
})
router.get("/bca-1-sem-programming-principles-and-c-language-23-157-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-programming-principles-and-c-language-23-157-c-2023.pdf")
})
router.get("/bca-1-sem-computer-organization-22-102-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-computer-organization-22-102-c-2022.pdf")
})
router.get("/bca-1-sem-pc-software-22-101-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-pc-software-22-101-c-2022.pdf")
})
router.get("/bca-1-sem-programming-principles-and-c-language-22-103-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-programming-principles-and-c-language-22-103-c-2022.pdf")
})
router.get("/bca-1-sem-fundamental-of-information-technology-21-226-c-2021.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-fundamental-of-information-technology-21-226-c-2021.pdf")
})
router.get("/bca-1-sem-computer-organisation-21-224-c-2021.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-computer-organisation-21-224-c-2021.pdf")
})
router.get("/bca-1-sem-pc-software-21-223-c-2021.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-pc-software-21-223-c-2021.pdf")
})
router.get("/bca-1-sem-programming-principles-and-c-language-21-225-c-2021.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-programming-principles-and-c-language-21-225-c-2021.pdf")
})
router.get("/bca-1-sem-computer-organisation-188-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-computer-organisation-188-c-2019.pdf")
})
router.get("/bca-1-sem-fundamental-of-it-190-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-fundamental-of-it-190-c-2019.pdf")
})
router.get("/bca-1-sem-pc-software-187-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-pc-software-187-c-2019.pdf")
})
router.get("/bca-1-sem-programming-principles-and-c-language-189-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-1-sem-programming-principles-and-c-language-189-c-2019.pdf")
})

/* ..................................................................question sem 2*/
router.get("/q2sem",function(req,res){
  res.render("q2sem");
})
router.get("/bca-2-sem-ca-discrete-mathematics-bca204-2022.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-ca-discrete-mathematics-bca204-2022.pdf")
})
router.get("/bca-2-sem-ca-object-modeling-and-cpp-programming-bca220201-2022.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-ca-object-modeling-and-cpp-programming-bca220201-2022.pdf")
})
router.get("/bca-2-sem-ca-system-analysis-and-design-bca220202-2022.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-ca-system-analysis-and-design-bca220202-2022.pdf")
})
router.get("/bca-2-sem-object-modeling-and-cpp-programming-22-130-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-object-modeling-and-cpp-programming-22-130-c-2022.pdf")
})
router.get("/bca-2-sem-discrete-mathematics-22-133-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-discrete-mathematics-22-133-c-2022.pdf")
})
router.get("/bca-2-sem-data-and-file-structure-using-c-103-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-data-and-file-structure-using-c-103-c-2018.pdf")
})
router.get("bca-2-sem-discrete-mathematics-104-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-discrete-mathematics-104-c-2018.pdf")
})
router.get("/bca-2-sem-object-modeling-and-cpp-programming-101-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-object-modeling-and-cpp-programming-101-c-2018.pdf")
})
router.get("/bca-2-sem-system-analysis-and-design-102-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-2-sem-system-analysis-and-design-102-c-2018.pdf")
})

/* ..................................................................question sem 3*/
router.get("/q3sem",function(req,res){
  res.render("q3sem");
})
router.get("/bca-3-sem-computer-based-numerical-and-statistical-techniques-23-159-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-computer-based-numerical-and-statistical-techniques-23-159-c-2023.pdf")
})
router.get("/bca-3-sem-software-engineering-23-160-c-2023.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-software-engineering-23-160-c-2023.pdf")
})
router.get("/bca-3-sem-elements-of-statistics-1090-2021.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-elements-of-statistics-1090-2021.pdf")
})
router.get("/bca-3-sem-java-programming-194-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-java-programming-194-c-2019.pdf")
})
router.get("/bca-3-sem-computer-based-numerical-and-statistical-techniques-129-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-computer-based-numerical-and-statistical-techniques-129-c-2018.pdf")
})
router.get("/bca-3-sem-principles-of-operating-system-131-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-principles-of-operating-system-131-c-2018.pdf")
})
router.get("/bca-3-sem-software-engineering-130-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-3-sem-software-engineering-130-c-2018.pdf")
})

/* ..................................................................question sem 4*/
router.get("/q4sem",function(req,res){
  res.render("q4sem");
})
router.get("/bca-4-sem-optimization-techniques-22-136-c-2022.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-optimization-techniques-22-136-c-2022.pdf")
})
router.get("/bca-4-sem-design-and-analysis-of-algorithm-105-c-2018.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-design-and-analysis-of-algorithm-105-c-2018.pdf")
})
router.get("/bca-4-sem-computer-graphic-and-animation-28-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-computer-graphic-and-animation-28-c-2017.pdf")
})
router.get("/bca-4-sem-data-base-management-system-26-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-data-base-management-system-26-c-2017.pdf")
})
router.get("/bca-4-sem-design-and-analysis-of-algorithm-25-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-design-and-analysis-of-algorithm-25-c-2017.pdf")
})
router.get("/bca-4-sem-optimisation-techniques-27-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-4-sem-optimisation-techniques-27-c-2017.pdf")
})


/* ..................................................................question sem 5*/
router.get("/q5sem",function(req,res){
  res.render("q5sem");
})
router.get("/bca-5-sem-web-design-195-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-5-sem-web-design-195-c-2019.pdf")
})
router.get("/bca-5-sem-data-mining-78-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-5-sem-data-mining-78-c-2017.pdf")
})
router.get("/bca-5-sem-web-design-195-c-2019.pdf",function(req,res){
  res.download("./public/docs/bca-5-sem-web-design-195-c-2019.pdf")
})
router.get("/bca-5-sem-dot-net-frame-work-and-c-has-79-c-2017.pdf",function(req,res){
  res.download("./public/docs/bca-5-sem-dot-net-frame-work-and-c-has-79-c-2017.pdf")
})

router.get("/q6sem",function(req,res){
    res.render("q6sem")
})

/* syllabus page. */
router.get('/syllabus', function(req, res) {
  res.render('syllabus');
});
router.get("/bca-syllbus.pdf",function(req,res){
  res.download("./public/docs/bca-syllbus.pdf")
})
router.get("/BCom-syllbus.pdf",function(req,res){
  res.download("./public/docs/BCom-syllbus.pdf")
})
router.get("/bca-syllbus.pdf",function(req,res){
  res.download("./public/docs/bca-syllbus.pdf")
})
router.get('/hindiblog', function(req, res) {
    res.render('hindiblog');
  });
router.get('/englishblog', function(req, res) {
    res.render('englishblog');
});
module.exports = router;

