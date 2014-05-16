using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dsk.Core.Entities;

namespace dsk.Core
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public bool IsValid { get; set; }
        public List<Role> Roles { get; set; }
        public UaerType UserType { get; set; }
        public List<Module> Modules { get; set; }


    }
}
