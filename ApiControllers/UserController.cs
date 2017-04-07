using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EntityLib.Models;
using EntityLib.Services;
using EntityLib.ViewModels;

namespace WebbsidaAngular.ApiControllers
{
    public class UserController : ApiController
    {

        EntityDbContext _EntityDb = new EntityDbContext();
        UserService _UService;
        private UserService UService
        {
            get
            {
                if (_UService == null)
                {
                    _UService = new UserService(_EntityDb);
                }
                return _UService;
            }
        }

        [HttpGet]
        public List<UserVm> GetUsers()
        {
            return UService.GetUsers();
        }

        [HttpGet]
        public UserVm GetUser(string id)
        {
            return UService.GetUser(id);
        }
    }
}
