import {GenericUpdateFormGroup} from "../../../../../_generic/form-group/GenericUpdateFormGroup";
import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryData} from "../../../../../domain/category/CategoryData";
import {CategoryUpdateDto} from "../../../../../domain/category/dto/CategoryUpdateDto";
import {CategoryDataControls} from "../../_common/CategoryDataControls";

export class CategoryUpdateFormGroup
  extends GenericUpdateFormGroup<CategoryData, CategoryDataControls, CategoryUpdateDto>
{

  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  //changes on lang changed
  name : FormControl = new FormControl("", Validators.required)
  overview : FormControl = new FormControl("", Validators.required)

  updateDto!:CategoryUpdateDto

  constructor() {
    super();
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }

  setDto(updateDto:CategoryUpdateDto){
    this.updateDto = updateDto
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      let categoryDataControls = new CategoryDataControls(modelData.lang, modelData.id)
      categoryDataControls.name.setValue(modelData.name)
      categoryDataControls.overview.setValue(modelData.overview)
      this.dataControlsList.push(categoryDataControls)

      if(modelData.lang == this.requiredLangs[0]){
        this.name = categoryDataControls.name
        this.overview =  categoryDataControls.overview
      }
    })

  }

  getDto():CategoryUpdateDto{
    let categoryUpdateDto:CategoryUpdateDto = {
      id: this.updateDto.id,
      dataList: new Array<CategoryData>()
    }
    this.dataControlsList.forEach((data)=>{
      categoryUpdateDto.dataList.push(data.getData())
    })
    return categoryUpdateDto
  }

  onLangChange(lang:string){
    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.name = data.name
      this.overview = data.overview
    }
  }




}
