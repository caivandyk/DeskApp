using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using dsk.App.Models;

namespace dsk.Controllers
{
    public class DeskAppController : Controller
    {
        //
        // GET: /DeskApp/

        public ActionResult Sandbox()
        {
            DeskAppModel model = new DeskAppModel();
            model.Id = 123322;
            return View(model);
        }

    }
}
