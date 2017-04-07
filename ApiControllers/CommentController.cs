using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EntityLib.ViewModels;
using EntityLib.Services;
using EntityLib.Models;

namespace WebbsidaAngular.ApiControllers
{
    public class CommentController : ApiController
    {
        private EntityDbContext _EntityDb = new EntityDbContext();
        private CommentService _CService;
        private CommentService CService
        {
            get
            {
                if (_CService == null)
                {
                    _CService = new CommentService(_EntityDb);
                }
                return _CService;
            }
        }


        [HttpGet]
        public List<CommentVm> GetComments()
        {
            return CService.GetComments();
        }



    }
}
