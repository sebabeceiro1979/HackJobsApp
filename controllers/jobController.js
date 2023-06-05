const { Job } = require("../models");
const Slugify = require("slugify");

const editar = async (req, res) => {
  const jobId = req.params.id;
  // const trabajo = await Job.findOne({
  //   where: {
  //     id: jobIb,
  //   },
  // });

  const trabajo = await Job.findByPk(jobId);

  res.render("admin/editJob", { job: trabajo });
};

async function actualizar(req, res) {
  const jobId = req.params.id;

  // Este es el job que quiero editar
  const trabajo = await Job.findByPk(jobId);

  trabajo.title = req.body.title;
  trabajo.description = req.body.description;
  trabajo.company = req.body.company;
  trabajo.city = req.body.city;
  trabajo.featured = req.body.features === "true" ? true : false;
  trabajo.applyEmail = req.body.applyEmail;

  await trabajo.save();

  // TODO: me falta actualizar en la base de datos

  res.redirect("/admin/ofertas");
}

module.exports = {
  index: async (req, res) => {
    const jobs = await Job.findAll();
    res.render("admin/jobs", { jobs, user: req.user });
  },
  create: async (req, res) => {
    res.render("admin/newJob", {
      user: req.user,
    });
  },
  store: async (req, res) => {
    console.log(req.body);
    const job = await Job.create({
      title: req.body.title,
      slug: Slugify(req.body.title),
      description: req.body.description,
      company: req.body.company,
      city: req.body.city,
      applyEmail: req.body.applyEmail,
      featured: req.body.featured === "true" ? true : false,
      //image:NULL, Si no lo envío se setea en NULL
    });
    res.redirect("/admin/ofertas");
  },
  destroy: async (req, res) => {
    const id = req.params.id;
    await Job.destroy({ where: { id } });
    res.redirect("/admin/ofertas");
  },
  edit: editar,
  update: actualizar,
};
