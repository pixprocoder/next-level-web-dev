
// Properties
interface Model<TData, TMethods>{
    data: TData;
    method: TMethods;
}

interface IUser {
    firstName: string;
    lastName: string;
}

// Methods
interface IMethod {
    fullName(): string
}

type model = Model<IUser, IMethod>

