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
    public class TopicController : ApiController
    {
        EntityDbContext _EntityDb = new EntityDbContext();
        TopicService _TService;
        private TopicService TService
        {
            get
            {
                if (_TService == null)
                {
                    _TService = new TopicService(_EntityDb);
                }
                return _TService;
            }
        }

        [HttpGet]
        public List<TopicsVm> GetTopics()
        {
            return TService.GetTopics();
        }

        [HttpGet]
        public TopicVm GetTopic(int id)
        {
            return TService.GetTopic(id);
        }

        [HttpPost]
        public void PostTopic(TopicVm vm)
        {
            TService.PostTopic(vm);
        }

        [HttpPost]
        public TopicVm PostComment(CommentVm vm)
        {
            return TService.PostComment(vm);
        }
    }
}
