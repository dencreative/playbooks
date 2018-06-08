@extends('layouts.playbook-layout')

@section('content')
        
            <div id="example"></div>
            
            <div class="col-md-12">
                <div class="card">
                    <div class="toolbar toolbar--inner">
                        <div class="toolbar__label">29 Total todo lists</div>

                        <div class="actions">
                            <i class="actions__item zmdi zmdi-search" data-ma-action="toolbar-search-open"></i>
                            <div class="dropdown actions__item">
                                <i class="zmdi zmdi-sort" data-toggle="dropdown"></i>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" class="dropdown-item">Newest to Oldest</a>
                                    <a href="" class="dropdown-item">Oldest to Newest</a>
                                </div>
                            </div>
                        </div>

                        <div class="toolbar__search">
                            <input type="text" placeholder="Search...">

                            <i class="toolbar__search__close zmdi zmdi-long-arrow-left" data-ma-action="toolbar-search-close"></i>
                        </div>
                    </div>

                    <div class="listview listview--bordered">
                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">

                              <span class="todo__info">
                                  <span>Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</span>
                                  <small>Today at 8.30 AM</small>
                              </span>

                            
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">
                                

                                    <span class="todo__info">
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit</span>
                                        <small>Today at 12.30 PM</small>
                                    </span>

                                    </span>
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item"">
                                
                                    <span class="todo__info">
                                        <span>Cras mattis consectetur purus sit amet fermentum</span>
                                        <small>Tomorrow at 10.30 AM</small>
                                    </span>

                                    <span class="listview__attrs">
                                        <span>#Clients</span>
                                        <span>!!</span>
                                    </span>
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">
                              

                                    <span class="todo__info">
                                        <span>Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum</span>
                                        <small>Tomorrow at 05.10 PM</small>
                                    </span>

                                  
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">
                                
                                    <span class="todo__info">
                                        <span>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</span>
                                        <small>05/08/2017 at 08.00 AM</small>
                                    </span>

                              
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">
                                

                                    <span class="todo__info">
                                        <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et</span>
                                        <small>10/08/2016 at 09.20 AM</small>
                                    </span>

                                    
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">

                                    <span class="todo__info">
                                        <span>Praesent commodo cursus magnavel scelerisque nisl consectetur</span>
                                        <small>10/08/2016 at 04.00 AM</small>
                                    </span>

                                   
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="listview__item">
                            <div class="custom-control custom-control--char todo__item">
                                
                                    <span class="todo__info">
                                        <span>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</span>
                                        <small>15/08/2016 at 10.22 PM</small>
                                    </span>

                                    
                                </label>
                            </div>

                            <div class="actions listview__actions">
                                <div class="dropdown actions__item">
                                    <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="">Edit</a>
                                        <a class="dropdown-item" href="">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

@endsection
