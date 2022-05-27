"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  const prefix = strapi.config.server.url;
  if (prefix) {
    strapi.router.stack.forEach((i) => (i.path = i.path.replace(prefix, "")));
    strapi.router.prefix(prefix);
    strapi.app.middleware.forEach((i) => i.router && i.router.prefix(prefix));

    strapi.app.use(async (ctx, next) => {
      if (
        ctx.request.url === prefix + "/_health" &&
        ctx.request.method === "HEAD"
      ) {
        ctx.set("strapi", "You are so French!");
        ctx.status = 204;
      } else {
        await next();
      }
    });
  }
  // strapi.router.stack.forEach((i) => console.log(i.path));
  // strapi.app.middleware.forEach(
  //   (i) => i.router && i.router.stack.forEach((j) => console.log(j.path))
  // );
};