import Link from "../models/Links.js";

const postLink = async (req, res) => {
  const { target, slug, title } = req.body;
  const link = new Link({
    target,
    slug,
    title,
  });

  const savedLink = await link.save();
  res.json({
    success: true,
    message: "Link created successfully",
    data: savedLink,
  });
};

//  redirecting slug

const getSlug = async (req, res) => {
  const { slug } = req.params;
  const link = await Link.findOne({
    slug,
  });

  if (!link) {
    return res.json({
      success: false,
      message: "link not found",
    });
  }

  link.views = link.views + 1;
  await link.save();
  res.redirect(link.target);
};

// export { postLink }
export { postLink, getSlug };
