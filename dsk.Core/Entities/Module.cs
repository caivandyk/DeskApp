using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace dsk.Core.Entities
{
    public class Module
    {
        public int Id { get; set; }
        public MenuItem MenuItem{ get; set; }
        public string Name { get; set; }
        public dsk.Core.Entities.Action Action { get; set; }
        

    }
}
