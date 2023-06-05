const {Job} = require ("../models");

module.exports = {
  showHome: (req, res) => {
    res.render("home");
  },
  showJobs: async (req, res) => {
    const jobs = await Job.findAll();
    res.render("jobs",{jobs});
  },
  showJob: async (req, res) => {
    const jobs = await Job.findOne({
      where:{
        slug:req.params.slug,
      }
    });
    res.render("job",{job:jobs});
  },
  showLogin: (req, res) => {
    res.render("auth/login");
  },
  showRegister: (req, res) => {
    res.render("auth/register");
  },
};
